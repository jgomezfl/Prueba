package com.example.demo.domain.model.dto;

import java.time.LocalDateTime;

public record GenericResponse (
        Object data,
        Response response
){
    public static  GenericResponse create(Object data, String code, String message){
        LocalDateTime now = LocalDateTime.now();
        Response response = new Response(code, message, now);
        return new GenericResponse(data, response);
    }
    private record  Response(
            String code,
            String message,
            LocalDateTime timestamp
    ){
    }
}