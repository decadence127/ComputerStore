package com.example.computerstorebackend.mapper;

import com.example.computerstorebackend.dto.AccountDataDTO;
import com.example.computerstorebackend.model.AccountData;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AccountDataMapper {

    AccountDataDTO toDto(AccountData accountData);
}
