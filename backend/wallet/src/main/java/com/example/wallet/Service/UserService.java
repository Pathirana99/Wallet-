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
        // Fetch the user by ID
        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found"));

        // Get the available balance, initializing to 0.0 if it's null
        double availableBalance = user.getBalance() != null ? user.getBalance() : 0.0;

        // Get the entered balance to be added or subtracted
        double enteredBalance = balanceDto.getBalance();

        // Calculate the new balance
        double newBalance = availableBalance + enteredBalance;

        // Update the user's balance
        user.setBalance(newBalance);
        userRepo.save(user);

        // Return the updated balance
        return new BalanceDto(newBalance);
    }

}
