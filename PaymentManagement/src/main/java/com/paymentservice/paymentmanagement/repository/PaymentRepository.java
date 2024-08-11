package com.paymentservice.paymentmanagement.repository;

import com.paymentservice.paymentmanagement.models.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {

    List<Payment> findAllByUserId(String customerId);
}
