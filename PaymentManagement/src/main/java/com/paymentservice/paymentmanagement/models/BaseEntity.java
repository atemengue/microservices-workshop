package com.paymentservice.paymentmanagement.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;


import java.util.Date;

@Data
@MappedSuperclass
public abstract class BaseEntity {

    /*
        All about model of data should be implements in the repository package.
        If you have a new things to manage, please create his model class
     */
    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt = new Date();

    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateAt;


    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    private Date deleteAt;

    private boolean isDelete = false;


}
