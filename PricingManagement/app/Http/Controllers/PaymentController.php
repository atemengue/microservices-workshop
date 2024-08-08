<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;

/**
 * @OA\Info(
 *     title="Payment Management API",
 *     version="1.0.0",
 *     description="API for managing payment transactions and their status",
 *     @OA\Contact(
 *         email="support@example.com"
 *     )
 * )
 */

class PaymentController extends Controller
{

    /**
     * @OA\Post(
     *     path="/api/payment",
     *     summary="Create Payment",
     *     description="Initiates a new payment transaction for an order.",
     *     tags={"Payment"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"orderId", "amount", "userId"},
     *             @OA\Property(property="orderId", type="string", example="order123"),
     *             @OA\Property(property="amount", type="number", format="float", example=100.50),
     *             @OA\Property(property="userId", type="string", example="user")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Payment created"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Application error"
     *     )
     * )
     */

    public function createPayment(Request $request)
    {
        $payment = Payment::create([
            'orderId' => $request->orderId,
            'userId' => $request->userId,
            'payment_status' => 'pending', // initial status
            'amount' => $request->amount,
        ]);

        return response()->json($payment, 201);
    }


    /**
     * @OA\Get(
     *     path="/api/payment/{paymentId}",
     *     summary="Get Payment Status",
     *     description="Retrieves the status of a specific payment.",
     *     tags={"Payment"},
     *     @OA\Parameter(
     *         name="paymentId",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string"),
     *         description="The ID of the payment"
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(property="paymentId", type="string", example="payment_123"),
     *             @OA\Property(property="status", type="string", example="completed"),
     *             @OA\Property(property="amount", type="number", format="float", example=25000),
     *             @OA\Property(property="createdAt", type="string", format="date-time", example="2024-07-21T10:00:00Z")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Application error"
     *     )
     * )
     */

    public function getPaymentStatus($paymentId)
    {
        $payment = Payment::find($paymentId);
        if (!$payment) {
            return response()->json(['message' => 'Payment not found'], 404);
        }
        return response()->json($payment, 200);
    }


    /**
     * @OA\Get(
     *     path="/api/payments/user/{userId}",
     *     summary="List All Payments for a User",
     *     description="Retrieves all payments made by a specific customer.",
     *     tags={"Payment"},
     *     @OA\Parameter(
     *         name="userId",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string"),
     *         description="The ID of the user"
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="paymentId", type="string", example="payment_123"),
     *                 @OA\Property(property="orderId", type="string", example="order123"),
     *                 @OA\Property(property="status", type="string", example="completed"),
     *                 @OA\Property(property="amount", type="number", format="float", example=25000),
     *                 @OA\Property(property="createdAt", type="string", format="date-time", example="2024-07-21T10:00:00Z")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Application error"
     *     )
     * )
     */

    public function listUserPayments($userId)
    {
        $payments = Payment::where('userId', $userId)->get();
        return response()->json($payments, 200);
    }
}
