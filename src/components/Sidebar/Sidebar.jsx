import { AsideStyled } from './Sidebar.styled';
import ProductsFilter from '../ProductsFilter/ProductsFilter';
import StaticLinksFilter from '../StaticLinksFilter';

const Sidebar = ({offers, staticLinks}) => {

    return (
        <AsideStyled>
            {offers && <ProductsFilter/>}
            {staticLinks && <StaticLinksFilter/>}
        </AsideStyled>
    )
}

export default Sidebar;