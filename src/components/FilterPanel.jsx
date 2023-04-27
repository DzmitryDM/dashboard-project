import { useDispatch, useSelector } from 'react-redux';
import { Badge } from './../UI/Badge';
import { Card } from './../UI/Card';
import { Stack } from './../UI/Stack';
import { selectFilters } from '../store/filters/filter-selectors';
import { clearfilter, removefilter } from '../store/filters/filter-actions';


const FilterPanel = () => {

   const CurrentFilters = useSelector(selectFilters)
const dispatch =useDispatch()

if(CurrentFilters.length === 0){
return null
}
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
        {CurrentFilters.map(item=>(
          <Badge key={item} onClear={()=>dispatch(removefilter(item))} variant="clearable">{item}</Badge>
        ))}
        </Stack>

        <button onClick={()=>dispatch(clearfilter)} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};