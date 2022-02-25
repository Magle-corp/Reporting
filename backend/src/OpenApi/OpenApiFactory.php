<?php
namespace App\OpenApi;

use ApiPlatform\Core\OpenApi\Factory\OpenApiFactoryInterface;
use ApiPlatform\Core\OpenApi\Model\PathItem;
use ApiPlatform\Core\OpenApi\Model\RequestBody;
use ApiPlatform\Core\OpenApi\OpenApi;
use ApiPlatform\Core\OpenApi\Model\Operation;
use ArrayObject;

class OpenApiFactory implements OpenApiFactoryInterface
{
    private OpenApiFactoryInterface $decorated;

    public function __construct(OpenApiFactoryInterface $decorated)
    {
        $this->decorated = $decorated;
    }

    public function __invoke(array $context = []): OpenApi
    {
        $openApi = $this->decorated->__invoke($context);

//        $schemas = $openApi->getComponents()->getSecuritySchemes();
//        $schemas['bearerAuth'] = new ArrayObject([
//            'type' => 'http',
//            'scheme' => 'bearer',
//            'bearerFormat' => 'JWT'
//        ]);
//
//        $schemas = $openApi->getComponents()->getSchemas();
//        $schemas['Credentials'] = new ArrayObject([
//           'type' => 'object',
//           'properties' => [
//               'username' => [
//                   'type' => 'string',
//               ],
//               'password' => [
//                   'type' => 'string'
//               ]
//           ]
//        ]);

//        $pathItem = new PathItem(
//            post: new Operation(
//                operationId: 'postApiLogin',
//                tags: ['User'],
//                responses: [
//                    '200' => [
//                        'description' => 'User connected',
//                        'content' => [
//                            'application/json' => [
//                                'schema' => [
//                                    '$ref' => '#/components/schemas/Credentials'
//                                ]
//                            ]
//                        ]
//                    ]
//                ],
//                requestBody: new RequestBody(
//                    content: new ArrayObject([
//                        'application/json' => [
//                            'schema' => [
//                                '$ref' => '#/components/schemas/User-read.user.item'
//                            ]
//                        ]
//                    ])
//                )
//            )
//        );
//
//        $openApi->getPaths()->addPath('/api/login', $pathItem);

        return $openApi;
    }
}