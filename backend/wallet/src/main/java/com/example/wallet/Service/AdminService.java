package com.example.wallet.Service;

import com.example.wallet.Dto.AdminDto;
import com.example.wallet.Entity.Admin;
import com.example.wallet.Repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service

public class AdminService {
    @Autowired
    AdminRepo adminRepo;

    public ResponseEntity saveAdmin(AdminDto adminDto) {
        adminRepo.save(new Admin(adminDto.getName(), adminDto.getEmail(), adminDto.getPassword()));
        return ResponseEntity.ok().build();
    }
}
