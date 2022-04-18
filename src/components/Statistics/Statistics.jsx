import PropTypes from 'prop-types';
import { SectionStatistics, Title, StatisticsList, ItemStatics } from './Statistics.styled'
import { getRandomHexColor } from 'utils/randomColor'

export const Statistics = ({ title, stats }) => {
    
    return (
        <SectionStatistics className="statistics">
            {title && <Title className="title">{title}</Title>}
            <StatisticsList className="stat-list">
                {
                    stats.map(({ id, label, percentage }) => (
                        <ItemStatics className="item" key={id} style={{backgroundColor:getRandomHexColor()}}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                        </ItemStatics>))
                }
            </StatisticsList>
        </SectionStatistics>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),)
};