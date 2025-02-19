<?php

namespace huseyinfiliz\notificationhub\Controller;

use Flarum\Api\Controller\AbstractShowController;
use huseyinfiliz\notificationhub\Model\NotificationHub;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;
use huseyinfiliz\notificationhub\Serializer\NotificationTypeSerializer;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Flarum\User\Exception\PermissionDeniedException;

class UpdateNotificationController extends AbstractShowController
{
    public $serializer = NotificationTypeSerializer::class;

    protected $notificationHub;

    public function __construct(NotificationHub $notificationHub)
    {
        $this->notificationHub = $notificationHub;
    }

    protected function data(Request $request, Document $document)
    {
        // Güncelleyen kullanıcıyı alıyoruz
        $actor = RequestUtil::getActor($request);

        // Yetki kontrolü (örneğin, yönetici veya belirli bir izin)
        if (!$actor->can('huseyinfiliz-notificationhub.send-all')) {
            throw new PermissionDeniedException();
        }

        // Güncellenecek bildirim türünün ID'sini al (URL'den)
        $queryParams = $request->getQueryParams();
        $id = Arr::get($queryParams, 'id');

        if (!$id) {
            throw new \Illuminate\Validation\ValidationException(['id' => ['Notification ID is required.']]);
        }

        // Bildirim türünü ID'ye göre bul
        $notificationType = $this->notificationHub->findOrFail($id);

        // İstekten gelen verileri al
        $data = (array) $request->getParsedBody();
        $attributes = Arr::get($data, 'data.attributes', []); // Arr::get ile güvenli erişim

        // Modelin update metodu ile güncelleme
        $notificationType->update($attributes);

        return $notificationType; // Güncellenmiş türü döndür
    }
}
