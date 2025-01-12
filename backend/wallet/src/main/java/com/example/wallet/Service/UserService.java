package com.example.wallet.Service;

import com.example.wallet.Dto.BalanceDto;
import com.example.wallet.Dto.UserDto;
import com.example.wallet.Dto.returnUserDto;
import com.example.wallet.Entity.User;
import com.example.wallet.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service

public class UserService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    PasswordEncoder passwordEncoder;

    public returnUserDto saveUser(UserDto userDto) {
        String encodedPassword = passwordEncoder.encode(userDto.getPassword());
        User user = userRepo.save(new User(userDto.getUsername(), userDto.getEmail(), encodedPassword, userDto.getRole()));
        return new returnUserDto(user.getId(), user.getUsername(), user.getEmail(), user.getRole());
    }

    public BalanceDto updateBalance(int id, BalanceDto balanceDto) {
        User user = userRepo.findById(id).get();
        double availableBalance = user.getBalance();

        double enteredBalance = balanceDto.getBalance();
        double newBalance = availableBalance + enteredBalance;

        user.setBalance(newBalance);
        userRepo.save(user);
        return new BalanceDto(newBalance);
    }
}
