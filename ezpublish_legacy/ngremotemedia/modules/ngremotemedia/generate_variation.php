<?php

$http = eZHTTPTool::instance();

$resourceId = $http->postVariable('resourceId', '');
$variation = $http->postVariable('variation', array());

$container = ezpKernel::instance()->getServiceContainer();
$provider = $container->get( 'netgen_remote_media.provider' );

$remoteResourceValue = $provider->getRemoteResource($resourceId, 'image');

$variations = $variation + $remoteResourceValue->variations;
$remoteResourceValue->variations = $variations;

reset($variation);
$variation = $provider->buildVariation(
    $remoteResourceValue,
    'embedded',
    key($variation)
);

eZHTTPTool::headerVariable('Content-Type', 'application/json; charset=utf-8');
print(json_encode(array('url' => $variation->url)));

eZExecution::cleanExit();
