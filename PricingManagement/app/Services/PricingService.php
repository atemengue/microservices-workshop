<?php

namespace App\Services;
use App\Models\Promotion;
use OpenApi\Annotations as OA;

/**
 * @OA\Info(title="Pricing Service API", version="1.0")
 * @OA\Server(url="http://localhost:8000")
 */

class PricingService
{
    public function calculate($items, $promotionCode)
    {
        $totalPrice = 0;

        // Calcul du prix total basé sur les items fournis
        foreach ($items as $item) {
            $totalPrice += $item['price'] * $item['quantity'];
        }

        // Récupération de la promotion depuis la base de données
        $promotion = Promotion::where('promotion_code', $promotionCode)->first();

        // Calcul de la réduction
        if ($promotion) {
            // Si la promotion est un pourcentage, on applique le pourcentage sur le prix total
            $discount = $promotion->pourcentage > 0 ? ($totalPrice * $promotion->pourcentage) / 100 : $promotion->discount;
        } else {
            $discount = 0; // Aucune réduction si le code promo est invalide
        }

        // Calcul du prix final
        $finalPrice = $totalPrice - $discount;

        // Retour des informations calculées
        return [
            'totalPrice' => $totalPrice,
            'discount' => $discount,
            'finalPrice' => $finalPrice,
            'promotionCode' => $promotionCode,
        ];
    }
}
