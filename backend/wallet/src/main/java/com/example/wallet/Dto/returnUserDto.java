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

    private String email;
    private String role;

}
