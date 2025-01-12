package com.example.wallet.Controller;

import com.example.wallet.Dto.AuthenticationRequest;
import com.example.wallet.Dto.AuthenticationResponse;
import com.example.wallet.Entity.User; // Import your custom User entity
import com.example.wallet.Service.LoginService;
import com.example.wallet.Utill.JwtUtill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/loginUser")
public class LoginController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtill jwtUtil;

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );

            final UserDetails userDetails = loginService.loadUserByUsername(request.getEmail());
            User user = loginService.findByEmail(request.getEmail()); // Use your custom User entity

            final String jwt = jwtUtil.generateToken(userDetails, user.getEmail(), user.getRole(), user.getId());

            AuthenticationResponse authResponse = new AuthenticationResponse(jwt, user.getRole());
            return ResponseEntity.ok(authResponse);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Authentication failed: Bad credentials");
        }
    }
}
