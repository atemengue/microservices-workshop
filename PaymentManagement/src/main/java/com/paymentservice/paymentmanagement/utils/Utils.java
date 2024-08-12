package com.paymentservice.paymentmanagement.utils;


import org.springframework.web.multipart.MultipartFile;

import java.util.Objects;

public class Utils {
    public static boolean verifyImageExtension(MultipartFile multipartFile){
        return (!Objects.equals(multipartFile.getContentType(), "image/jpg") && !Objects.equals(multipartFile.getContentType(), "image/jpeg") && !Objects.equals(multipartFile.getContentType(), "image/png"));
    }
    public static Boolean verifyFileExtensionType(MultipartFile multipartFile){
        return  (!Objects.equals(multipartFile.getContentType(), "application/pdf"));
    }
}
