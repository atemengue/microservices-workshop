package com.paymentservice.paymentmanagement;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.paymentservice.paymentmanagement.models.Payment;
import com.paymentservice.paymentmanagement.service.PaymentService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@SpringBootApplication
public class PaymentManagementApplication implements CommandLineRunner {
    final PaymentService paymentService;
    PaymentManagementApplication(PaymentService paymentService){
        this.paymentService = paymentService;
    }
    private static final String seedDataFile = "./data.json";
    private static final ObjectMapper objectMapper = new ObjectMapper();
    private static List<Payment> loadPayments() {
        try {
            File file = new File(seedDataFile);
            return objectMapper.readValue(file, new TypeReference<List<Payment>>(){});
        } catch (IOException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
    public static void main(String[] args) {
        SpringApplication.run(PaymentManagementApplication.class, args);
    }
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*")
                        .allowedMethods("*")
                        .allowedHeaders("*");
            }
        };
    }

    @Override
    public void run(String... args) throws Exception {
        List<Payment> data = loadPayments();
        if (data != null && !data.isEmpty())
            for (Payment payment : data) {
                if (paymentService.findById(payment.getPaymentId()).isEmpty())
                    paymentService.create(payment);
            }
    }
}
