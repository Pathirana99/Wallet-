package com.example.wallet.Controller;

import com.example.wallet.Dto.AuthenticationResponse;
import com.example.wallet.Dto.BalanceDto;
import com.example.wallet.Dto.UserDto;
import com.example.wallet.Dto.returnUserDto;
import com.example.wallet.Service.UserService;
import com.example.wallet.Utill.JwtUtill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtill jwtUtil;

    @PostMapping("/save")
    public ResponseEntity<Object> saveUser(@RequestBody UserDto userDto) {
        returnUserDto savedUser = userService.saveUser(userDto);

        String jwt = jwtUtil.generateToken(
                new org.springframework.security.core.userdetails.User(savedUser.getEmail(), userDto.getPassword(), new ArrayList<>()),
                savedUser.getEmail(),
                savedUser.getRole(),
                savedUser.getId(),
                savedUser.getUsername()
        );

        AuthenticationResponse authResponse = new AuthenticationResponse(jwt, savedUser.getRole());
        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateBalance(@PathVariable int id, @RequestBody BalanceDto balanceDto) {
        BalanceDto updatedBalance = userService.updateBalance(id, balanceDto);
        return new ResponseEntity<>(updatedBalance, HttpStatus.OK);
    }
}
