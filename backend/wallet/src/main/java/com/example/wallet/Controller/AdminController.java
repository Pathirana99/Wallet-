package com.example.wallet.Controller;

import com.example.wallet.Dto.AdminDto;
import com.example.wallet.Dto.UserDto;
import com.example.wallet.Dto.UserInAdminDto;
import com.example.wallet.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")

public class AdminController {
    @Autowired
    AdminService adminService;

    @PostMapping("/save")
    public ResponseEntity<Object> saveAdmin(@RequestBody AdminDto adminDto) {
        adminService.saveAdmin(adminDto);
        return new  ResponseEntity<>("Sucess", HttpStatus.OK);
    }
    @GetMapping("/all")
        public ResponseEntity<List<UserInAdminDto>> getAllUsers() {
            List<UserInAdminDto> allUsers = adminService.getAllUsers();
            return new ResponseEntity<>(allUsers, HttpStatus.OK);
        }
}