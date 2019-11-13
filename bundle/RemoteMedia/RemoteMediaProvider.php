<?php

declare(strict_types=1);

namespace Netgen\Bundle\RemoteMediaBundle\RemoteMedia;

use Netgen\Bundle\RemoteMediaBundle\Core\FieldType\RemoteMedia\Value;
use Netgen\Bundle\RemoteMediaBundle\RemoteMedia\Provider\Cloudinary\Search\Query;
use Netgen\Bundle\RemoteMediaBundle\RemoteMedia\Provider\Cloudinary\Search\Result;
use Netgen\Bundle\RemoteMediaBundle\RemoteMedia\Transformation\Registry;
use Psr\Log\LoggerInterface;

abstract class RemoteMediaProvider
{
    /** @var \Netgen\Bundle\RemoteMediaBundle\RemoteMedia\Transformation\Registry */
    protected $registry;

    /** @var \Netgen\Bundle\RemoteMediaBundle\RemoteMedia\VariationResolver */
    protected $variationResolver;

    /** @var \Psr\Log\LoggerInterface */
    protected $logger;

    public function __construct(Registry $registry, VariationResolver $variationsResolver, LoggerInterface $logger = null)
    {
        $this->registry = $registry;
        $this->variationResolver = $variationsResolver;
        $this->logger = $logger;
    }

    /**
     * @return bool
     */
    abstract public function supportsContentBrowser();

    /**
     * @return bool
     */
    abstract public function supportsFolders();

    /**
     * Uploads the local resource to remote storage and builds the Value from the response.
     *
     * @param array $options
     *
     * @return Value
     */
    abstract public function upload(UploadFile $uploadFile, $options = []);

    /**
     * Gets the remote media Variation.
     * If the remote media does not support variations, this method should return the Variation
     * with the url set to original resource.
     *
     * @param string $contentTypeIdentifier
     * @param string|array $format
     * @param bool $secure
     *
     * @return \Netgen\Bundle\RemoteMediaBundle\Core\FieldType\RemoteMedia\Variation
     */
    abstract public function buildVariation(Value $value, $contentTypeIdentifier, $format, $secure = true);

    /**
     * Lists all available folders.
     * If folders are not supported, should return empty array.
     *
     * @return array
     */
    abstract public function listFolders();

    /**
     * Counts available resources from the remote storage.
     *
     * @return int
     */
    abstract public function countResources();

    /**
     * Searches for the remote resource containing term in the query.
     *
     * @param \Netgen\Bundle\RemoteMediaBundle\RemoteMedia\Provider\Cloudinary\Search\Query $query
     *
     * @return \Netgen\Bundle\RemoteMediaBundle\RemoteMedia\Provider\Cloudinary\Search\Result
     */
    abstract public function searchResources(Query $query): Result;

    /**
     * Returns the remote resource with provided id and type.
     *
     * @param mixed $resourceId
     * @param string $resourceType
     *
     * @return Value
     */
    abstract public function getRemoteResource($resourceId, $resourceType = 'image');

    /**
     * Adds tag to remote resource.
     *
     * @param string $resourceId
     * @param string $tag
     *
     * @return mixed
     */
    abstract public function addTagToResource($resourceId, $tag);

    /**
     * Removes tag from remote resource.
     *
     * @param string $resourceId
     * @param string $tag
     *
     * @return mixed
     */
    abstract public function removeTagFromResource($resourceId, $tag);

    abstract public function updateTags($resourceId, $tags);

    /**
     * Updates the resource context.
     * eg. alt text and caption:
     * context = [
     *      'caption' => 'new caption'
     *      'alt' => 'alt text'
     * ];.
     *
     * @param mixed $resourceId
     * @param string $resourceType
     * @param array $context
     *
     * @return mixed
     */
    abstract public function updateResourceContext($resourceId, $resourceType, $context);

    /**
     * Returns thumbnail url for the video with provided id.
     *
     * @param array $options
     *
     * @return string
     */
    abstract public function getVideoThumbnail(Value $value, $options = []);

    /**
     * Generates html5 video tag for the video with provided id.
     *
     * @param string $contentTypeIdentifier
     * @param string $format
     *
     * @return string
     */
    abstract public function generateVideoTag(Value $value, $contentTypeIdentifier, $format = '');

    /**
     * Removes the resource from the remote.
     *
     * @param $resourceId
     */
    abstract public function deleteResource($resourceId);

    /**
     * Generates the link to the remote resource.
     *
     * @return string
     */
    abstract public function generateDownloadLink(Value $value);

    /**
     * Returns unique identifier of the provided.
     *
     * @return string
     */
    abstract public function getIdentifier();

    /**
     * Logs the error if the logger is available.
     *
     * @param $message
     */
    protected function logError($message)
    {
        if ($this->logger instanceof LoggerInterface) {
            $this->logger->error($message);
        }
    }
}
