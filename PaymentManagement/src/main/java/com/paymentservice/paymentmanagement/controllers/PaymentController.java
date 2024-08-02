package com.paymentservice.paymentmanagement.controllers;

import com.paymentservice.paymentmanagement.models.DTO.PaymentDTO;
import com.paymentservice.paymentmanagement.service.PaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class PaymentController {
    final PaymentService paymentService;
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/payment")
    public ResponseEntity<?> payment(@RequestBody PaymentDTO payment) {
        return paymentService.createPayment(payment);
    }

    @GetMapping("/payment/{id}")
    public ResponseEntity<?> getPaymentById(@PathVariable Long id) {
        return paymentService.getById(id);
    }

    @GetMapping("/payments/user/{userId}")
    public ResponseEntity<?> getAllPaymentsForUser(@PathVariable String userId) {
        return paymentService.getAllForUser(userId);
    }
}
