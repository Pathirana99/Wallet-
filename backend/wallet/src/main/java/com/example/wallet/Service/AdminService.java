package com.example.wallet.Service;

import com.example.wallet.Dto.AdminDto;
import com.example.wallet.Dto.UserDto;
import com.example.wallet.Entity.Admin;
import com.example.wallet.Entity.User;
import com.example.wallet.Repo.AdminRepo;
import com.example.wallet.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service

public class AdminService {
    @Autowired
    AdminRepo adminRepo;
    @Autowired
    UserRepo userRepo;

    public ResponseEntity saveAdmin(AdminDto adminDto) {
        adminRepo.save(new Admin(adminDto.getName(), adminDto.getEmail(), adminDto.getPassword()));
        return ResponseEntity.ok().build();
    }

    public List<UserDto> getAllUsers() {
        List<User> all = userRepo.findAll();
        List<UserDto> userDtos = new ArrayList<>();

        for (User user : all) {
            userDtos.add(new UserDto(
                    user.getId(),
                    user.getUsername(),
                    user.getEmail(),
                    user.getPassword()
            ));
        }
        return userDtos;
    }
}