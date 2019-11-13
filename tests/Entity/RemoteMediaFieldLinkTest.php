<?php

declare(strict_types=1);

namespace Netgen\Bundle\RemoteMediaBundle\Tests\Entity;

use Netgen\Bundle\RemoteMediaBundle\Entity\RemoteMediaFieldLink;
use PHPUnit\Framework\TestCase;

class RemoteMediaFieldLinkTest extends TestCase
{
    /**
     * @var \Netgen\Bundle\RemoteMediaBundle\Entity\RemoteMediaFieldLink
     */
    protected $entity;

    public function setUp()
    {
        $this->entity = new RemoteMediaFieldLink();
        parent::setUp();
    }

    public function testSettersAndGetters()
    {
        $this->entity
            ->setContentId(42)
            ->setFieldId(24)
            ->setVersionId(1)
            ->setResourceId('test')
            ->setProvider('testprovider');

        $this->assertEquals(42, $this->entity->getContentId());
        $this->assertEquals(24, $this->entity->getFieldId());
        $this->assertEquals(1, $this->entity->getVersionId());
        $this->assertEquals('test', $this->entity->getResourceId());
        $this->assertEquals('testprovider', $this->entity->getProvider());
    }
}
