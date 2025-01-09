package com.example.wallet.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BalanceDto {
    private Integer id;
    private Double balance;

    public BalanceDto(Double balance) {
        this.balance = balance;
    }
}
