import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { IFormType } from "../@types/IForm";
import { Login } from "../components/Form/Login";
import { Register } from "../components/Form/Register";

export const Home = () => {
  const [type, setType] = useState<IFormType>("register");

  const onChangeType = (type: IFormType) => {
    setType(type);
  };

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }}>
      <Box>
        <Image src="/images/cover.jpg" />
      </Box>
      <Box my={16}>
        <SimpleGrid columns={2} mx={4}>
          <Box
            onClick={() => onChangeType("login")}
            cursor="pointer"
            borderBottom={"2px"}
            p={4}
            borderColor={type === "login" ? "brand.400" : "inherit"}
            textAlign="center"
          >
            Login
          </Box>

          <Box
            onClick={() => onChangeType("register")}
            cursor="pointer"
            borderBottom={"2px"}
            p={4}
            borderColor={type === "register" ? "brand.400" : "inherit"}
            textAlign="center"
          >
            Register
          </Box>
        </SimpleGrid>
        <Box>
          {type === "login" && <Login onCompleteLogin={() => {}} />}
          {type === "register" && (
            <Register
              onCompleteRegister={(type) => {
                onChangeType(type as IFormType);
              }}
            />
          )}
        </Box>
      </Box>
    </SimpleGrid>
  );
};
