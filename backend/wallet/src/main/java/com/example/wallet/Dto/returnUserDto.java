package com.example.wallet.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class returnUserDto {
    private Integer id;
    private String username;
    private String balance;
    private String email;

    public returnUserDto(Integer id, String username, String email) {
    }
}
