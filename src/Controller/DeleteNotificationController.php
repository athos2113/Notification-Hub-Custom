<?php

namespace huseyinfiliz\notificationhub\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Http\RequestUtil;
use huseyinfiliz\notificationhub\Model\NotificationHub;
use Laminas\Diactoros\Response\EmptyResponse;
use Psr\Http\Message\ServerRequestInterface;

class DeleteNotificationController extends AbstractDeleteController
{
    protected function delete(ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);

        // URL'den gelen 'id' parametresini alıyoruz
        $queryParams = $request->getQueryParams();
        $notificationTypeId = $queryParams['id'] ?? null; // PHP 7.4 fix

        // Eğer 'id' eksikse, 400 Bad Request döndür
        if (!$notificationTypeId) {
            return new EmptyResponse(400);
        }

        // Veritabanından bildirimi getir
        $notification = NotificationHub::query()
            ->where('id', $notificationTypeId)
            ->first();

        // Eğer bildirim bulunamazsa, 404 Not Found döndür
        if (!$notification) {
            return new EmptyResponse(404);
        }

        // Bildirimi sil
        $notification->delete();

        // 204 No Content döndür (doğru HTTP yanıtı)
        return new EmptyResponse(204);
    }
}
