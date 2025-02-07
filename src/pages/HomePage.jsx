
import { React, useState } from 'react';
import { postTeam } from '../utils/postTeam'
import background from "../assets/images/background_01.jpg"
import classes from '../stylesheet/Home.module.scss';
import "../stylesheet/ques.css"
import "../stylesheet/Homepage.css"
import { VStack,Box,Heading,FormControl,FormLabel,Input,Button ,Image} from '@chakra-ui/react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import adminlogo from '../assets/logo/user.png';
import logo from "../assets/logo/main_logo.gif"
function Home() {
    const [teamName, setTeamName] = useState('');
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const teamName = document.getElementById("team").value;
            if(teamName) {
                await handleTeamSubmit();
                navigate('/rules'); 
            } else {
                alert("Please Fill The Team Name!")
            }
            // After successful request, redirect to /rules
        } catch (error) {
            console.error('Error submitting team:', error);
        }
    };

    const handleTeamSubmit = async (event) => {
        const input = document.getElementById("team").value;
        // console.log("Input", input)
        setTeamName(input);

        try {
            await postTeam(input);
            localStorage.setItem("teamName", input);
            // console.log("Team Name", input)
        } catch (error) {
            console.log("Error", error)
        }
    };
    return (
        <>
       <div className='container'>
        <div className='image-container'>
        <div class="inner-container">
        <div class="box">
            <div class="form-container">
                <h1>  Byte 2024</h1>
                <div class="form-group">
                    <label for="teamName">Team Name</label>
                    <input type="text" id="team"  placeholder="Enter team name"/>
                </div>
                <button onClick={handleClick} class="submit-btn">Start</button>
            </div>
            <img src={logo} alt="Logo" class="logo"/>
        </div>
    </div>

        </div>

       </div>

        </>
    );
}

export default Home;

// <div className={classes.pageCover}>


// <div className={`shadow-lg position-absolute top-50 start-50 translate-middle ${classes.box}`}>
//     <div className={classes.box1}>

//     </div>
//     <div className={classes.box2}>

//     </div>
// </div>

// <div className={`position-absolute top-50 start-50 translate-middle ${classes.innerBorder1}`}>

// </div>
// <div className={`shadow-lg position-absolute top-50 start-50 translate-middle ${classes.innerBorder2}`}>
//     <div className={classes.mainInner1}>
//         <div className={`mt-5 ms-5 p-5 ps-5 container`} style={{ color: "white" }}>
//             <h1 className={`pb-3 ${classes.byte_title}`} style={{ fontSize: '6rem' }}>BYTE <p style={{ color: "white", fontSize: '2rem' }}>2024</p> </h1>

//             <div className="mb-3">
//                 <div className="mb-3 w-50 inputbox">

//                     <input type="text" id="team" className="w-85" style={{ fontSize: '1.7rem', color: "white", }} placeholder='Team Name' />
//                 </div>
//             </div>
//             <button className="buttonbhai" onClick={handleClick}>
//                     Start
//             </button>


//         </div>
//         <div className={classes.homecodexlogo}></div>
//         <div className={classes.onelogo}></div>
//     </div>
//     <div className={classes.mainInner2}>
//         <div className="admin" >
//             <Link className='admin-button' to={'/admin'}>
//                 <img src={adminlogo} style={{ margin: '2rem' }} height={"50px"} width={"50px"} alt="" />
                
//             </Link>
//         </div>
//     </div>
// </div>

// </div>



// <Box 
// bg="black" 
// minH="100vh" 
// my="12vh" 
// mx="auto"
// >
// <Container maxW="container.xl" p={0}>
//   <Flex
//     direction={{ base: 'column', lg: 'row' }}
//     h={{ base: 'auto', lg: '80vh' }}
//   >
//     {/* Background Image Container */}
//     <Box 
//       w={{ base: '100%', lg: '90%' }} 
//       h={{ base: '60vh', lg: '60vh' }}
//       position="relative"
//       mx="auto"
//     >
//       <Image
//         src={background}
//         alt="Space Background"
//         objectFit="contain"
//         w="100%"
//         h="100%"
//       />
//     </Box>

//     {/* Content Container */}
//     <Flex
//       direction={{ base: 'column', lg: 'row' }}
//       w="full"
//       position={{ lg: 'absolute' }}
//       top={{ lg: '50%' }}
//       left={{ lg: '50%' }}
//       transform={{ lg: 'translate(-50%, -50%)' }}
//       justify="space-between"
//       align="center"
//       px={{ base: 4, lg: 8 }}
//     >
//       {/* Form Section */}
//       <VStack
//         w={{ base: 'full', lg: '50%' }}
//         spacing={8}
//         align="flex-start"
//         bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')}
//         p={8}
//         borderRadius="xl"
//         backdropFilter="blur(10px)"
//         m={4}
//       >
//         <Heading
//           color="white"
//           fontSize={{ base: '4xl', lg: '5xl' }}
//           fontWeight="bold"
//         >
//           BYTE 2024
//         </Heading>
        
//         <FormControl>
//           <Input
//             placeholder="Enter your team name here!"
//             size="lg"
//             bg="transparent"
//             border="1px solid"
//             borderColor="whiteAlpha.400"
//             color="white"
//             _placeholder={{ color: 'whiteAlpha.700' }}
//             _hover={{ borderColor: 'whiteAlpha.600' }}
//             _focus={{ borderColor: 'white' }}
//           />
//         </FormControl>
//       </VStack>

//       {/* Logo Section */}
//       <Box
//         w={{ base: 'full', lg: '20%' }}
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         m={4}
//       >
//         <Box
//           w="150px"
//           h="150px"
//           borderRadius="full"
//           border="2px solid white"
//           p={4}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Image
//             src= {logo}
//             alt="Codex Club Logo"
//             w="80%"
//             h="80%"
//             objectFit="contain"
//           />
//         </Box>
//       </Box>
//     </Flex>
//   </Flex>
// </Container>
// </Box>
