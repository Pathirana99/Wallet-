package com.example.wallet.Service;

import com.example.wallet.Dto.UserDto;
import com.example.wallet.Dto.returnUserDto;
import com.example.wallet.Entity.User;
import com.example.wallet.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class UserService {

    @Autowired
    UserRepo userRepo;

    public returnUserDto saveUser(UserDto userDto) {
        User user = userRepo.save(new User(userDto.getUsername(), userDto.getEmail(), userDto.getPassword()));
        return new returnUserDto(user.getId(), user.getUsername(), user.getEmail());
    }
}
