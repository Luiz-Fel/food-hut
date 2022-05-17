import { HeaderContainer, HeaderLeftSide, SearchBar, SearchBarContainer } from "./styles";
import  Image  from "next/image"
import logo from "../../../public/logo.svg"
import searchIcon from "../../../public/searchIcon.svg"

export function Header() {
    return (
        
        <HeaderContainer>
            <HeaderLeftSide>

                <Image 
                src={logo} 
                height={46}
                width={48}
                />

                <SearchBarContainer>
                        <SearchBar />
                        <Image 
                        src={searchIcon} 
                        height={46}
                        width={48}
                        />

                </SearchBarContainer>
            </HeaderLeftSide>
        </HeaderContainer>
    )
}