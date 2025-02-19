<?php

namespace huseyinfiliz\notificationhub\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use huseyinfiliz\notificationhub\Model\NotificationHub;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;
use huseyinfiliz\notificationhub\Serializer\NotificationTypeSerializer;
use Illuminate\Support\Arr;

class CreateNotificationController extends AbstractCreateController
{
    public $serializer = NotificationTypeSerializer::class;

    protected $notificationHub;

    public function __construct(NotificationHub $notificationHub)
    {
        $this->notificationHub = $notificationHub;
    }

    protected function data(Request $request, Document $document)
    {
        $data = (array) $request->getParsedBody();
        $attributes = Arr::get($data, 'data.attributes', []);

        $notificationType = new NotificationHub();
        $notificationType->name = Arr::get($attributes, 'name', '');
        $notificationType->excerpt_key = Arr::get($attributes, 'excerpt_key', '');
        $notificationType->default_icon = Arr::get($attributes, 'default_icon', '');
        $notificationType->default_message_key = Arr::get($attributes, 'default_message_key', '');
        $notificationType->description = Arr::get($attributes, 'description', '');
        $notificationType->is_active = Arr::get($attributes, 'is_active', false);
        $notificationType->sort_order = Arr::get($attributes, 'sort_order', 0);
        $notificationType->permission = Arr::get($attributes, 'permission', '');
        $notificationType->color = Arr::get($attributes, 'color', '');
        $notificationType->default_url = Arr::get($attributes, 'default_url', '');
        $notificationType->default_recipients = Arr::get($attributes, 'default_recipients', '');

        $notificationType->save();

        return $notificationType;
    }
}
