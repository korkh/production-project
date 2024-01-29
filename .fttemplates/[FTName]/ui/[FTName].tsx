import { classNames } from 'shared/lib/classNames/classNames';
import cls from './[FTName].module.scss';
import { PropsWithChildren } from 'react';
		
interface [FTName]Props {
  className?: string;
}

export const [FTName] = (props: PropsWithChildren<[FTName]Props>) => {
	const { className, children, ...otherProps } = props;
		return (
			<div 
				  	className={classNames(cls.[FTName | camelcase], [className], {})} 
				  	{...otherProps}
				  >
			     {children}
			   </div>			    
			 );
      };