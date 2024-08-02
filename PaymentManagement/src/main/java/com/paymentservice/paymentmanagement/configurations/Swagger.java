package com.paymentservice.paymentmanagement.configurations;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
    info = @Info(
            contact = @Contact(
                    name = "Dave CHEDJOUN",
                    email = "davechedjoun@gmail.com"
    ),
            title = " Documentation for Payment management service",
            description = "All routes to resources of the api with their description",
            version = "1.0"
),
        servers = {
            @Server(
                    description = "local env",
                    url = "http://localhost:8083/"
            ),
            @Server(
                    description = "prod env",
                    url = ""
            )
        }
)
public class Swagger {


}
