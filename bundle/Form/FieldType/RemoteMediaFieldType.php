<?php

declare(strict_types=1);

namespace Netgen\Bundle\RemoteMediaBundle\Form\FieldType;

use eZ\Publish\API\Repository\FieldTypeService;
use eZ\Publish\API\Repository\Values\Content\Field;
use Netgen\Bundle\RemoteMediaBundle\Core\FieldType\RemoteMedia\UpdateFieldHelper;
use Netgen\Bundle\RemoteMediaBundle\RemoteMedia\RemoteMediaProvider;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RemoteMediaFieldType extends AbstractType
{
    /**
     * @var \eZ\Publish\API\Repository\FieldTypeService
     */
    private $fieldTypeService;

    /**
     * @var \Netgen\Bundle\RemoteMediaBundle\RemoteMedia\RemoteMediaProvider
     */
    private $remoteMediaProvider;

    /**
     * @var UpdateFieldHelper
     */
    private $updateHelper;

    public function __construct(FieldTypeService $fieldTypeService, RemoteMediaProvider $remoteMediaProvider, UpdateFieldHelper $updateHelper)
    {
        $this->fieldTypeService = $fieldTypeService;
        $this->remoteMediaProvider = $remoteMediaProvider;
        $this->updateHelper = $updateHelper;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setRequired(['field']);
        $resolver->setAllowedTypes('field', Field::class);
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('resource_id', HiddenType::class)
            ->add('alt_text', TextType::class)
            ->add(
                'tags',
                ChoiceType::class,
                [
                    'multiple' => true,
                    'choices' => ['{{tag}}' => true],
                    'choice_attr' => static function () {
                        return ['v-for' => 'tag in allTags', ':value' => 'tag'];
                    },
                ]
            )
            ->add('image_variations', HiddenType::class)
            ->add('new_file', FileType::class)
            ->addModelTransformer(
                new FieldValueTransformer(
                    $this->fieldTypeService->getFieldType('ngremotemedia'),
                    $options['field'],
                    $this->remoteMediaProvider,
                    $this->updateHelper
                )
            );
    }

    public function getBlockPrefix()
    {
        return 'ezplatform_fieldtype_ngremotemedia';
    }
}
