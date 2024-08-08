<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PaymentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('payments')->insert([['orderId' => 'order_001', 'userId' => 'user_001', 'payment_status' => 'completed', 'amount' => 100.0], ['orderId' => 'order_002', 'userId' => 'user_002', 'payment_status' => 'pending', 'amount' => 200.0], ['orderId' => 'order_003', 'userId' => 'user_003', 'payment_status' => 'failed', 'amount' => 300.0]]);
    }
}
