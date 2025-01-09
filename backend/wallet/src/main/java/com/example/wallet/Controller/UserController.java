package com.example.wallet.Controller;

import com.example.wallet.Dto.BalanceDto;
import com.example.wallet.Dto.UserDto;
import com.example.wallet.Dto.returnUserDto;
import com.example.wallet.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<Object> saveUser(@RequestBody UserDto userDto) {
        returnUserDto savedUser = userService.saveUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateBalance(@PathVariable int id, @RequestBody BalanceDto balanceDto) {
        BalanceDto updatedBalance = userService.updateBalance(id, balanceDto);
        return new ResponseEntity<>(updatedBalance, HttpStatus.OK);
    }
}
