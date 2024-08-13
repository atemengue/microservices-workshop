<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PricingService;
use OpenApi\Annotations as OA;


class PricingController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/pricing/calculate",
     *     summary="Calculates the price of an order",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="items",
     *                 type="array",
     *                 @OA\Items(
     *                     type="object",
     *                     @OA\Property(property="productId", type="string"),
     *                     @OA\Property(property="quantity", type="integer"),
     *                     @OA\Property(property="price", type="number")
     *                 )
     *             ),
     *             @OA\Property(property="customerId", type="string"),
     *             @OA\Property(property="promotionCode", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="totalPrice", type="number"),
     *             @OA\Property(property="discount", type="number"),
     *             @OA\Property(property="finalPrice", type="number"),
     *             @OA\Property(property="promotionCode", type="string")
     *         )
     *     ),
     *     @OA\Response(response=400, description="Bad Request"),
     *     @OA\Response(response=500, description="Server Error")
     * )
     */

    protected $pricingService;

    public function __construct(PricingService $pricingService)
    {
        $this->pricingService = $pricingService;
    }

    public function calculate(Request $request)
    {
        // Valide les données d'entrée
        $validatedData = $request->validate([
            'items' => 'required|array|min:1',
            'items.*.productId' => 'required|string',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.price' => 'required|numeric|min:0',
            'promotionCode' => 'nullable|string',
        ]);

        // Appelle le service pour calculer les prix
        $result = $this->pricingService->calculate($validatedData['items'], $validatedData['promotionCode'] ?? null);

        // Retourne la réponse sous forme JSON
        return response()->json($result);
    }
}
