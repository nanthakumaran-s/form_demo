import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Form = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onFormSubmitHandller = () => {
    try {
      const payload = {
        firstName,
        lastName,
        email,
        password,
        mobileNumber,
        gender,
      };
      console.log(payload);
      setIsFormSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setMobileNumber("");
      setGender("male");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <form
        style={{
          width: "30%",
        }}
      >
        <Flex gap="3">
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input
              type="text"
              value={firstName}
              placeholder="Enter first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last name</FormLabel>
            <Input
              type="text"
              value={lastName}
              placeholder="Enter last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
        </Flex>

        <FormControl mt="3">
          <FormLabel>Email address</FormLabel>
          <InputGroup>
            <Input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputRightAddon children="@gmail.com" />
          </InputGroup>
        </FormControl>

        <FormControl mt="3">
          <FormLabel>Phone</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input
              type="tel"
              placeholder="Enter phone number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </InputGroup>
        </FormControl>

        <FormControl as="fieldset" mt="3">
          <FormLabel as="legend">Gender</FormLabel>
          <RadioGroup defaultValue={gender} onChange={setGender}>
            <HStack spacing="24px">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <FormControl mt="3">
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Flex justifyContent="end" mt="3">
          <Button colorScheme="twitter" onClick={onFormSubmitHandller}>
            Submit
          </Button>
        </Flex>
      </form>

      <AlertDialog
        isOpen={isFormSubmitted}
        onClose={() => setIsFormSubmitted(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Form Submitted!</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody mb="24px">
              Thanks For Your Response
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};

export default Form;
