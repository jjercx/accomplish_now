import fonts from '../../theme/fonts';
import { normalize } from '../../utils/dimensions';

const largeTitle = {
	fontSize: normalize( 36 ),
	fontFamily: fonts.productSansBold
};

const userTitle = {
	fontSize: normalize( 30 ),
	fontFamily: fonts.productSansBold
};

const userTitleRegular = {
	fontSize: normalize( 30 ),
	fontFamily: fonts.productSansRegular
};

const semiLargeTitle = {
	fontSize: normalize( 29 ),
	fontFamily: fonts.productSansBold
};

const midPlusTitle = {
	fontSize: normalize( 23 ),
	fontFamily: fonts.productSansBold
};

const midTitle = {
	fontSize: normalize( 17 ),
	fontFamily: fonts.productSansRegular
};

const smallTitle = {
	fontSize: normalize( 16 ),
	fontFamily: fonts.productSansRegular
};

const smallTitleBold = {
	fontSize: 16,
	fontFamily: fonts.productSansBold
};

const smallBody = {
	fontSize: 14,
	fontFamily: fonts.productSansRegular
};


const midBody = {
	fontSize: 16,
	fontFamily: fonts.productSansRegular
};

export default {
	'userTitle': userTitle,
	'userTitleRegular': userTitleRegular,
	'largeTitle': largeTitle,
	'midTitle': midTitle,
	'smallTitle': smallTitle,
	'smallBody': smallBody,
	'midBody': midBody,
	'semiLargeTitle': semiLargeTitle,
	'smallTitleBold': smallTitleBold,
	'midPlusTitle': midPlusTitle
};
