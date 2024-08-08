<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $primaryKey = 'paymentId';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = ['orderId', 'userId', 'payment_status', 'amount'];
}
