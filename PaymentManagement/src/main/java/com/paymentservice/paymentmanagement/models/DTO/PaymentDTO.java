package com.paymentservice.paymentmanagement.models.DTO;

import lombok.Data;

@Data
public class PaymentDTO {
   private String orderId;
   private String userId;
   private Long amount;
}
