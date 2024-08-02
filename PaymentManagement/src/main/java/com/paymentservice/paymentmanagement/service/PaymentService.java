package com.paymentservice.paymentmanagement.service;

import com.paymentservice.paymentmanagement.models.DTO.PaymentDTO;
import com.paymentservice.paymentmanagement.models.Payment;
import com.paymentservice.paymentmanagement.models.Status;
import com.paymentservice.paymentmanagement.repository.PaymentRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PaymentService {
    final PaymentRepository paymentRepository;

    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public Payment convertToEntity(PaymentDTO paymentDTO) {
        Payment payment = new Payment();
        payment.setOrderId(paymentDTO.getOrderId());
        payment.setAmount(paymentDTO.getAmount());
        payment.setUserId(paymentDTO.getUserId());
        return payment;
    }

    public ResponseEntity<?> createPayment(PaymentDTO payment) {
        try {
            Payment newPayment = convertToEntity(payment);
            newPayment.setPayment_status(Status.CREATED);
            paymentRepository.save(newPayment);
            return new ResponseEntity<>("Payment Created", HttpStatus.CREATED);
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>("An error occurs", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> getById(Long id) {
        try {
            Optional<Payment> payment = paymentRepository.findById(id);
            if (payment.isPresent()) return new ResponseEntity<>(payment.get(), HttpStatus.OK);
            else return new ResponseEntity<>("Payment Not Found", HttpStatus.NOT_FOUND);
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>("An error occurs", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> getAllForUser(String userId) {
        try {
            return new ResponseEntity<>(paymentRepository.findAllByUserId(userId), HttpStatus.OK);
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>("An error occurs", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
