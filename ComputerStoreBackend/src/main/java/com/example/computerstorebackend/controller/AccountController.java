package com.example.computerstorebackend.controller;

import com.example.computerstorebackend.exception.ResourceNotFoundException;
import com.example.computerstorebackend.mapper.AccountMapper;
import com.example.computerstorebackend.model.Account;
import com.example.computerstorebackend.model.AccountData;
import com.example.computerstorebackend.model.Cart;
import com.example.computerstorebackend.model.Role;
import com.example.computerstorebackend.service.account.AccountService;
import com.example.computerstorebackend.service.cart.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import static org.springframework.http.HttpStatus.UNAUTHORIZED;
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ComputerStore")
public class AccountController {

    private AccountMapper accountMapper;
    private AccountService accountService;
    private CartService cartService;

    @Autowired
    public AccountController(AccountMapper accountMapper, AccountService accountService, CartService cartService) {
        this.accountMapper = accountMapper;
        this.accountService = accountService;
        this.cartService = cartService;
    }

    @GetMapping("/account/users")
    public List<Account> getUserAccounts() {
        return accountService.findByRole(Role.USER);
    }

    @GetMapping("/account/admins")
    public List<Account> getAdminAccounts() {
        return accountService.findByRole(Role.ADMIN);
    }


    @GetMapping("/account")
    public List<Account> getAllAccounts() {
        return accountService.findAll();
    }

    @GetMapping("/refresh")
    public ResponseEntity refresh(@RequestHeader("Authorization") String bearer){
        String token = bearer.substring(7);
        System.out.println(token);
        Optional<Account> acc = accountService.findByToken(token);
        if(acc.isPresent()){
            return ResponseEntity.ok(acc);
        }
        HashMap<String, String> errorEntity = new HashMap<>();
        errorEntity.put("status", UNAUTHORIZED.toString());
        errorEntity.put("msg", "Unauthorized");

        return new ResponseEntity<>(errorEntity, UNAUTHORIZED);
    }
    @PostMapping("/signIn")
    public ResponseEntity signIn(@RequestBody Map<String, String> str) {
        String email = str.get("email");
        String password = str.get("password");
        Optional<Account> acc = accountService.findByEmail(email);
        if (acc.isPresent()) {
            if(Objects.equals(acc.get().getPassword(), password)) {
                acc.get().setToken(acc.get().getEmail());
                return ResponseEntity.ok(acc);
            } else{
                HashMap<String, String> errorEntity = new HashMap<>();
                errorEntity.put("status", UNPROCESSABLE_ENTITY.toString());
                errorEntity.put("msg", "Invalid password");

                return new ResponseEntity<>(errorEntity, UNPROCESSABLE_ENTITY);
            }
        } else {
            HashMap<String, String> errorEntity = new HashMap<>();
            errorEntity.put("status", UNPROCESSABLE_ENTITY.toString());
            errorEntity.put("msg", "User with such email doesn't exist");

            return new ResponseEntity<>(errorEntity, UNPROCESSABLE_ENTITY);
        }
    }

    @PostMapping("/signUp")
    public ResponseEntity signUp(@RequestBody Account account) {
        Optional<Account> byEmail = accountService.findByEmail(account.getEmail());
        if (byEmail.isEmpty()) {
//            user.setPassword(passwordEncoder.encode(user.getPassword()));
            account.setRole(Role.USER);
            account.setToken(account.getEmail());
            Account acc = accountService.save(account);
            Cart cart = Cart.builder().account(acc).build();
            cartService.save(cart);
            return ResponseEntity.ok(acc);
        } else {
            HashMap<String, String> errorEntity = new HashMap<>();
            errorEntity.put("status", UNPROCESSABLE_ENTITY.toString());
            errorEntity.put("msg", "The email already exists");
            return new ResponseEntity<>(errorEntity, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/account/{id}")
    public ResponseEntity editUser(@PathVariable Long id, @RequestBody Account account) {
        Optional<Account> a = accountService.findById(id);
        if (a.isPresent()) {
            Account acc = a.get();
            acc.setPassword(account.getPassword());
            AccountData data = acc.getAccountData();
            data.setFirstname(account.getAccountData().getFirstname());
            data.setLastname(account.getAccountData().getLastname());
            data.setPhone(account.getAccountData().getPhone());
            acc.setAccountData(data);
            return ResponseEntity.ok(accountService.update(acc));
        } else {
            return new ResponseEntity<>("Incorrect input", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/account/role/{id}")
    public ResponseEntity editRoleUser(@PathVariable Long id, @RequestBody Map<String, String> str) {
        Role role = Role.valueOf(str.get("role"));
        Optional<Account> a = accountService.findById(id);
        Account acc = a.orElseThrow(() -> new ResourceNotFoundException("Account not found with id :" + id));
        acc.setRole(role);
        return ResponseEntity.ok(accountService.update(acc));
    }


    @GetMapping("/account/{id}")
    public ResponseEntity getUserById(@PathVariable Long id) {
        Optional<Account> account = accountService.findById(id);
        Account acc = account.orElseThrow(() -> new ResourceNotFoundException("Account not found with id :" + id));
        return ResponseEntity.ok(accountMapper.toDto(acc));
    }

    @DeleteMapping("/account/{id}")
    public ResponseEntity del(@PathVariable Long id) {
        Optional<Account> account = accountService.findById(id);
        Account acc = account.orElseThrow(() -> new ResourceNotFoundException("Account not found with id :" + id));
        accountService.delete(acc);
        return new ResponseEntity<>("Successful operation", HttpStatus.OK);
    }


}
