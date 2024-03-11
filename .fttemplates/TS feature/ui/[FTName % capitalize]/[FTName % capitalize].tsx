import { classNames } from 'shared/lib/classNames/classNames';
import cls from './[FTName % uppercasefirstchar].module.scss';
import { useTranslation } from "react-i18next";
import {memo} from "react";
		
interface <FTName % capitalize>Props {
  className?: string;
}

const <FTName % capitalize> = memo(function <FTName % capitalize>(props: <FTName % capitalize>Props) {
	const { className } = props;
	const { t } = useTranslation();
		return (
			<div 
				className={classNames(cls.[FTName | camelcase], [className], {})}				  
			>
			{t("<FTName % capitalize>")}
			</div>			    
		);
});

export default <FTName % capitalize>;