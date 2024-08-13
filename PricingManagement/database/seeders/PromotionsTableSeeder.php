<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PromotionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('promotions')->insert([
            [
                'promotion_code' => 'SUMMER2024',
                'discount' => 15,
                'pourcentage' => 10,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'promotion_code' => 'WINTER2024',
                'discount' => 20,
                'pourcentage' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
