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

const profileUserTitleRegular = {
	fontSize: normalize( 23 ),
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
	fontSize: normalize( 15 ),
	fontFamily: fonts.productSansRegular
};

const smallTitleBold = {
	fontSize: 16,
	fontFamily: fonts.productSansBold
};

const xxsmallBody = {
	fontSize: 10,
	fontFamily: fonts.productSansRegular
};

const xsmallBody = {
	fontSize: 11,
	fontFamily: fonts.productSansRegular
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
	'profileUserTitleRegular': profileUserTitleRegular,
	'largeTitle': largeTitle,
	'midTitle': midTitle,
	'smallTitle': smallTitle,
	'smallBody': smallBody,
	'midBody': midBody,
	'semiLargeTitle': semiLargeTitle,
	'smallTitleBold': smallTitleBold,
	'midPlusTitle': midPlusTitle,
	'xsmallBody': xsmallBody,
	'xxsmallBody': xxsmallBody
};
