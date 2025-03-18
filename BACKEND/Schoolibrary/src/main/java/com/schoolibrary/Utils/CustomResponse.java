/**
 *@Ismarianto
 *
 **/
package com.schoolibrary.Utils;
public class CustomResponse<T> {
    private String message;
    private T data;
    private int responseCode;

    public CustomResponse() {
    }

    public CustomResponse(String message, T data, int responseCode) {
        this.message = message;
        this.data = data;
        this.responseCode = responseCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public int getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(int responseCode) {
        this.responseCode = responseCode;
    }

    @Override
    public String toString() {
        return "ApiResponse{" +
                "message='" + message + '\'' +
                ", data=" + data +
                ", responseCode=" + responseCode +
                '}';
    }
}
