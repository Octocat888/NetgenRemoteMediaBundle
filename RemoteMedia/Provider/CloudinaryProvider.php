<?php

namespace Netgen\Bundle\RemoteMediaBundle\RemoteMedia\Provider;

use Netgen\Bundle\RemoteMediaBundle\RemoteMedia\RemoteMediaProviderInterface;
use \Cloudinary;
use \Cloudinary\Uploader;
use eZ\Publish\SPI\Persistence\Content\VersionInfo;
use eZ\Publish\SPI\Persistence\Content\Field;

class CloudinaryProvider implements RemoteMediaProviderInterface
{
    protected $cloudinary;

    protected $cloudinaryUploader;

    public function __construct($cloudinaryOptions)
    {
        if (empty($cloudinaryOptions['cloud_name']) || empty($cloudinaryOptions['api_key']) || empty($cloudinaryOptions['api_secret'])) {
            throw new \InvalidArgumentException('Cloudinary cloud_name, api_key and api_secret must all be set!');
        }

        $this->cloudinary = new Cloudinary();
        $this->cloudinary->config(
            array(
                "cloud_name" => $cloudinaryOptions['cloud_name'],
                "api_key" => $cloudinaryOptions['api_key'],
                "api_secret" => $cloudinaryOptions['api_secret']
            )
        );

        $this->cloudinaryUploader = new Uploader();
    }

    public function upload(VersionInfo $versionInfo, Field $field)
    {
        $options = $this->getUploadOptions($versionInfo, $field);

        return $this->cloudinaryUploader->upload($field->value->externalData, $options);
    }

    // Examples
    // cl_image_tag("israel.png", array("width"=>100, "height"=>100, "alt"=>"hello") # W/H are not sent to cloudinary
    // cl_image_tag("israel.png", array("width"=>100, "height"=>100, "alt"=>"hello", "crop"=>"fit") # W/H are sent to cloudinary
    public function getFormattedUrl($source, $options = array())
    {
        return cloudinary_url_internal($source, $options);
    }

    protected function getUploadOptions(VersionInfo $versionInfo, Field $field)
    {
        $fileUri = $field->value->externalData;
        $folder = $versionInfo->contentInfo->id . '/' . $field->id;
        $options = array(
            'public_id' => $folder . '/' . basename($fileUri),
            'overwrite' => true
        );

        return $options;
    }
}
