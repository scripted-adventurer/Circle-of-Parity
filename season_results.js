var seasonResults = {
  '2009': {
    'ARI': ['CHI', 'JAC', 'HOU', 'SEA', 'NYG', 'SEA', 'STL', 'MIN', 'DET', 'STL'],
    'ATL': ['WAS', 'MIA', 'CAR', 'SF', 'CHI', 'TB', 'NYJ', 'BUF', 'TB'],
    'BAL': ['KC', 'SD', 'CLE', 'DEN', 'CLE', 'PIT', 'DET', 'CHI', 'OAK'],
    'BUF': ['TB', 'NYJ', 'CAR', 'MIA', 'KC', 'IND'],
    'CAR': ['WAS', 'TB', 'ARI', 'ATL', 'TB', 'MIN', 'NYG', 'NO'],
    'CHI': ['PIT', 'SEA', 'DET', 'CLE', 'STL', 'MIN', 'DET'],
    'CIN': ['BAL', 'GB', 'PIT', 'CLE', 'BAL', 'CHI', 'PIT', 'CLE', 'DET', 'KC'],
    'CLE': ['BUF', 'PIT', 'KC', 'OAK', 'JAC'],
    'DAL': ['TB', 'CAR', 'KC', 'ATL', 'SEA', 'PHI', 'WAS', 'OAK', 'NO', 'WAS', 'PHI'],
    'DEN': ['CIN', 'CLE', 'OAK', 'DAL', 'NE', 'SD', 'NYG', 'KC'],
    'DET': ['WAS', 'CLE'],
    'GB': ['CHI', 'STL', 'DET', 'CLE', 'DAL', 'SF', 'DET', 'BAL', 'CHI', 'SEA', 'ARI'],
    'HOU': ['TEN', 'OAK', 'CIN', 'SF', 'BUF', 'SEA', 'STL', 'MIA', 'NE'],
    'IND': ['HOU', 'JAC', 'MIA', 'ARI', 'SEA', 'TEN', 'STL', 'SF', 'NE', 'BAL', 'HOU', 'TEN', 'DEN', 'JAC'],
    'JAC': ['KC', 'HOU', 'TEN', 'STL', 'NYJ', 'BUF', 'HOU'],
    'KC': ['WAS', 'OAK', 'PIT', 'DEN'],
    'MIA': ['BUF', 'NYJ', 'NYJ', 'TB', 'CAR', 'NE', 'JAC'],
    'MIN': ['CLE', 'DET', 'SF', 'GB', 'STL', 'BAL', 'GB', 'DET', 'SEA', 'CHI', 'CIN', 'NYG'],
    'NE': ['MIA', 'BUF', 'ATL', 'BAL', 'TEN', 'TB', 'NYJ', 'CAR', 'BUF', 'JAC'],
    'NO': ['ATL', 'DET', 'PHI', 'BUF', 'NYJ', 'NYG', 'MIA', 'CAR', 'STL', 'TB', 'NE', 'WAS', 'ATL'],
    'NYG': ['WAS', 'DAL', 'TB', 'KC', 'OAK', 'ATL', 'DAL', 'WAS'],
    'NYJ': ['HOU', 'NE', 'TEN', 'OAK', 'CAR', 'BUF', 'TB', 'IND', 'CIN'],
    'OAK': ['KC', 'PHI', 'CIN', 'PIT', 'DEN'],
    'PHI': ['NYG', 'CAR', 'KC', 'TB', 'WAS', 'CHI', 'WAS', 'ATL', 'NYG', 'SF', 'DEN'],
    'PIT': ['TEN', 'SD', 'DET', 'CLE', 'MIN', 'DEN', 'GB', 'BAL', 'MIA'],
    'SD': ['OAK', 'MIA', 'KC', 'OAK', 'NYG', 'PHI', 'DEN', 'KC', 'CLE', 'DAL', 'CIN', 'TEN', 'WAS'],
    'SEA': ['STL', 'JAC', 'DET', 'STL', 'SF'],
    'SF': ['ARI', 'SEA', 'STL', 'CHI', 'JAC', 'ARI', 'DET', 'STL'],
    'STL': ['DET'],
    'TB': ['GB', 'SEA', 'NO'],
    'TEN': ['JAC', 'SF', 'BUF', 'HOU', 'ARI', 'STL', 'MIA', 'SEA'],
    'WAS': ['STL', 'TB', 'DEN', 'OAK']},
  '2010': {
    'ARI': ['NO', 'STL', 'DAL', 'DEN', 'OAK'], 
    'ATL': ['SEA', 'TB', 'CAR', 'BAL', 'STL', 'CLE', 'NO', 'ARI', 'GB', 'SF', 'CIN'], 
    'BAL': ['BUF', 'CIN', 'MIA', 'HOU', 'NO', 'DEN', 'CAR', 'CLE', 'PIT', 'TB', 'NYJ'], 
    'BUF': ['CLE', 'DET', 'CIN', 'MIA'], 
    'CAR': ['SF', 'ARI'], 
    'CHI': ['GB', 'BUF', 'NYJ', 'PHI', 'DAL', 'MIN', 'DET', 'MIA', 'CAR'], 
    'CIN': ['SD', 'CLE', 'CAR', 'BAL'], 
    'CLE': ['CAR', 'MIA', 'NO', 'CIN', 'NE'], 
    'DAL': ['HOU', 'NYG', 'DET', 'PHI', 'WAS', 'IND'], 
    'DEN': ['HOU', 'TEN', 'KC', 'SEA'], 
    'DET': ['GB', 'TB', 'MIN', 'STL', 'MIA', 'WAS'], 
    'GB': ['DAL', 'BUF', 'PHI', 'CHI', 'NYJ', 'MIN', 'SF', 'NYG', 'DET'], 
    'HOU': ['JAC', 'IND', 'WAS', 'KC', 'OAK', 'TEN'], 
    'IND': ['JAC', 'OAK', 'CIN', 'WAS', 'TEN', 'DEN', 'NYG', 'HOU', 'KC'], 
    'JAC': ['CLE', 'TEN', 'BUF', 'HOU', 'IND', 'DAL', 'DEN', 'OAK'], 
    'KC': ['DEN', 'TEN', 'SD', 'SF', 'JAC', 'BUF', 'ARI', 'STL', 'CLE', 'SEA'], 
    'MIA': ['CIN', 'MIN', 'BUF', 'NYJ', 'GB', 'TEN', 'OAK'], 
    'MIN': ['DAL', 'WAS', 'BUF', 'DET', 'ARI', 'PHI'], 
    'NE': ['IND', 'SD', 'BUF', 'CHI', 'MIA', 'DET', 'CIN', 'MIN', 'PIT', 'NYJ', 'BAL', 'GB'], 
    'NO': ['SEA', 'CAR', 'MIN', 'ATL', 'DAL', 'TB', 'SF', 'CIN', 'STL', 'PIT'], 
    'NYG': ['WAS', 'HOU', 'CHI', 'JAC', 'DAL', 'CAR', 'MIN', 'SEA', 'DET'], 
    'NYJ': ['BUF', 'DET', 'CIN', 'NE', 'HOU', 'CLE', 'PIT', 'DEN', 'MIA', 'MIN'], 
    'OAK': ['SD', 'KC', 'SEA', 'STL', 'DEN'], 
    'PHI': ['NYG', 'JAC', 'WAS', 'HOU', 'ATL', 'DAL', 'DET', 'IND', 'SF'], 
    'PIT': ['TB', 'CIN', 'BAL', 'TEN', 'CAR', 'BUF', 'ATL', 'OAK', 'CLE', 'MIA'], 
    'SD': ['HOU', 'DEN', 'IND', 'TEN', 'ARI', 'SF', 'JAC', 'KC'],
    'SEA': ['CAR', 'CHI', 'ARI', 'SD', 'STL', 'SF'], 
    'SF': ['DEN', 'ARI', 'STL', 'SEA', 'OAK'], 
    'STL': ['SD', 'ARI', 'SEA', 'WAS', 'CAR', 'SF', 'DEN'], 
    'TB': ['CAR', 'ARI', 'SEA', 'CIN', 'NO', 'STL', 'SF', 'WAS', 'CLE'], 
    'TEN': ['DAL', 'OAK', 'HOU', 'NYG', 'PHI', 'JAC'], 
    'WAS': ['DAL', 'JAC', 'GB', 'TEN', 'CHI', 'PHI']},
  '2011': {
    'ARI': ['SF', 'STL', 'PHI', 'CLE', 'SEA', 'DAL', 'CAR'], 
    'ATL': ['IND', 'PHI', 'TB', 'JAC', 'DET', 'TEN', 'SEA', 'CAR', 'MIN'], 
    'BAL': ['IND', 'PIT', 'STL', 'NYJ', 'SF', 'HOU', 'CIN', 'CLE', 'ARI'], 
    'BUF': ['DEN', 'KC', 'PHI', 'WAS', 'NE', 'OAK'], 
    'CAR': ['TB', 'HOU', 'WAS', 'IND', 'JAC'], 
    'CHI': ['PHI', 'SD', 'ATL', 'CAR', 'DET', 'MIN', 'TB'], 
    'CIN': ['IND', 'BUF', 'STL', 'TEN', 'JAC', 'SEA', 'CLE', 'ARI'], 
    'CLE': ['JAC', 'IND', 'MIA', 'SEA'], 
    'DAL': ['BUF', 'SEA', 'STL', 'TB', 'SF', 'MIA', 'WAS'], 
    'DEN': ['MIN', 'CHI', 'NYJ', 'OAK', 'SD', 'KC', 'MIA', 'CIN'], 
    'DET': ['KC', 'MIN', 'TB', 'OAK', 'CAR', 'SD', 'DAL', 'CHI', 'DEN'], 
    'GB': ['OAK', 'NYG', 'DET', 'MIN', 'NO', 'CAR', 'SD', 'TB', 'ATL', 'DEN', 'CHI', 'STL'], 
    'HOU': ['PIT', 'ATL', 'CLE', 'CIN', 'JAC', 'TB', 'TEN', 'MIA', 'IND'], 
    'IND': ['TEN', 'HOU'], 
    'JAC': ['TB', 'BAL', 'TEN', 'IND'], 
    'KC': ['SD', 'MIN', 'GB', 'CHI', 'OAK', 'IND', 'DEN'], 
    'MIA': ['WAS', 'KC', 'OAK', 'BUF', 'NYJ'], 
    'MIN': ['CAR', 'ARI', 'WAS'], 
    'NE': ['DEN', 'SD', 'MIA', 'NYJ', 'WAS', 'DAL', 'PHI', 'IND', 'BUF', 'KC', 'OAK'], 
    'NO': ['NYG', 'CHI', 'CAR', 'JAC', 'HOU', 'MIN', 'IND', 'DET', 'TB', 'TEN', 'ATL'], 
    'NYG': ['DAL', 'MIA', 'ARI', 'PHI', 'STL', 'NYJ', 'NE', 'BUF'], 
    'NYJ': ['MIA', 'JAC', 'WAS', 'DAL', 'KC', 'BUF', 'SD'], 
    'OAK': ['MIN', 'SD', 'NYJ', 'DEN', 'CHI', 'KC', 'HOU', 'CLE'], 
    'PHI': ['MIA', 'NYJ', 'NYG', 'DAL', 'STL', 'WAS'], 
    'PIT': ['IND', 'ARI', 'NE', 'SEA', 'STL', 'CLE', 'KC', 'JAC', 'TEN', 'CIN'], 
    'SD': ['DEN', 'OAK', 'JAC', 'KC', 'BUF', 'BAL', 'MIN', 'MIA'],
    'SEA': ['NYG', 'CHI', 'ARI', 'STL', 'PHI', 'BAL'], 
    'SF': ['STL', 'DET', 'SEA', 'ARI', 'TB', 'CIN', 'NYG', 'PIT', 'PHI', 'CLE', 'WAS'], 
    'STL': ['CLE', 'NO'], 
    'TB': ['IND', 'ATL', 'NO', 'MIN'], 
    'TEN': ['IND', 'BAL', 'DEN', 'CAR', 'TB', 'BUF', 'CLE', 'JAC', 'HOU'], 
    'WAS': ['NYG', 'SEA', 'ARI', 'STL']},
  '2012': {
    'ARI': ['SEA', 'NE', 'DET', 'MIA', 'PHI'], 
    'ATL': ['DEN', 'CAR', 'NYG', 'NO', 'WAS', 'DAL', 'SD', 'ARI', 'TB', 'OAK', 'KC', 'PHI', 'DET'], 
    'BAL': ['NYG', 'NE', 'DAL', 'CIN', 'KC', 'OAK', 'PIT', 'CLE', 'SD'], 
    'BUF': ['MIA', 'CLE', 'JAC', 'NYJ', 'KC', 'ARI'], 
    'CAR': ['ATL', 'OAK', 'PHI', 'SD', 'NO', 'WAS'], 
    'CHI': ['DET', 'JAC', 'STL', 'ARI', 'MIN', 'DAL', 'IND', 'CAR', 'TEN'], 
    'CIN': ['PIT', 'KC', 'CLE', 'WAS', 'SD', 'OAK', 'NYG', 'PHI', 'JAC', 'BAL'], 
    'CLE': ['OAK', 'SD', 'CIN', 'KC', 'PIT'], 
    'DAL': ['PHI', 'CIN', 'NYG', 'CLE', 'PIT', 'CAR', 'TB'], 
    'DEN': ['CAR', 'KC', 'SD', 'TB', 'BAL', 'OAK', 'PIT', 'CLE', 'NO', 'CIN'], 
    'DET': ['PHI', 'STL', 'SEA', 'JAC'], 
    'GB': ['TEN', 'DET', 'CHI', 'NO', 'ARI', 'JAC', 'STL', 'MIN', 'HOU'], 
    'HOU': ['MIA', 'TEN', 'BUF', 'NYJ', 'IND', 'JAC', 'DET', 'CHI', 'BAL', 'DEN'], 
    'IND': ['CLE', 'KC', 'MIA', 'TEN', 'JAC', 'GB', 'HOU', 'MIN', 'DET', 'BUF'], 
    'JAC': ['TEN', 'IND'], 
    'KC': ['NO', 'CAR'], 
    'MIA': ['STL', 'OAK', 'NYJ', 'JAC', 'BUF', 'SEA', 'CIN'], 
    'MIN': ['HOU', 'TEN', 'CHI', 'DET', 'STL', 'ARI', 'JAC', 'GB', 'SF'], 
    'NE': ['DEN', 'NYJ', 'STL', 'MIA', 'IND', 'BUF', 'TEN', 'HOU', 'JAC'], 
    'NO': ['SD', 'ATL', 'DAL', 'OAK', 'PHI', 'TB'], 
    'NYG': ['GB', 'DAL', 'TB', 'SF', 'PHI', 'CAR', 'CLE', 'WAS', 'NO'], 
    'NYJ': ['IND', 'BUF', 'STL', 'JAC', 'ARI', 'MIA'], 
    'OAK': ['JAC', 'KC', 'PIT'], 
    'PHI': ['NYG', 'TB', 'CLE', 'BAL'], 
    'PIT': ['NYG', 'CLE', 'PHI', 'NYJ', 'WAS', 'BAL', 'CIN', 'KC'], 
    'SD': ['KC', 'TEN', 'OAK', 'PIT', 'NYJ'],
    'SEA': ['DAL', 'NE', 'SF', 'GB', 'ARI', 'STL', 'NYJ', 'CHI', 'CAR', 'BUF', 'MIN'], 
    'SF': ['MIA', 'CHI', 'GB', 'NE', 'BUF', 'NYJ', 'DET', 'ARI', 'SEA', 'NO'], 
    'STL': ['WAS', 'SEA', 'TB', 'SF', 'BUF', 'ARI'], 
    'TB': ['KC', 'SD', 'ATL', 'OAK', 'CAR', 'MIN'], 
    'TEN': ['MIA', 'BUF', 'PIT', 'NYJ', 'DET', 'JAC'], 
    'WAS': ['BAL', 'DAL', 'NO', 'NYG', 'CLE', 'TB', 'MIN', 'PHI']},
  '2013': {
    'ARI': ['SEA', 'DET', 'ATL', 'STL', 'IND', 'TB', 'JAC', 'CAR', 'TEN', 'HOU'], 
    'ATL': ['STL', 'WAS', 'TB', 'BUF'], 
    'BAL': ['NYJ', 'CIN', 'MIA', 'DET', 'PIT', 'HOU', 'CLE', 'MIN'], 
    'BUF': ['MIA', 'BAL', 'NYJ', 'CAR', 'JAC'], 
    'CAR': ['NE', 'ATL', 'STL', 'SF', 'MIN', 'NO', 'NYJ', 'MIA', 'TB', 'NYG'], 
    'CHI': ['MIN', 'NYG', 'CLE', 'GB', 'DAL', 'BAL', 'PIT', 'CIN'], 
    'CIN': ['BAL', 'IND', 'NYJ', 'PIT', 'CLE', 'BUF', 'GB', 'NE', 'SD', 'DET', 'MIN'], 
    'CLE': ['CIN', 'BUF', 'MIN', 'BAL'], 
    'DAL': ['OAK', 'PHI', 'NYG', 'STL', 'WAS', 'MIN'], 
    'DEN': ['NYG', 'OAK', 'DAL', 'JAC', 'KC', 'HOU', 'PHI', 'BAL', 'SD', 'TEN', 'WAS'], 
    'DET': ['CHI', 'MIN', 'GB', 'CLE', 'WAS', 'DAL'], 
    'GB': ['DAL', 'DET', 'WAS', 'MIN', 'CLE', 'ATL', 'CHI', 'BAL'], 
    'HOU': ['SD', 'TEN'], 
    'IND': ['KC', 'OAK', 'DEN', 'HOU', 'SF', 'SEA', 'JAC', 'TEN'], 
    'JAC': ['TEN', 'HOU', 'CLE'], 
    'KC': ['PHI', 'JAC', 'CLE', 'HOU', 'DAL', 'WAS', 'TEN', 'BUF', 'NYG', 'OAK'], 
    'MIA': ['CLE', 'NE', 'SD', 'NYJ', 'ATL', 'CIN', 'PIT', 'IND'], 
    'MIN': ['PIT', 'PHI', 'DET', 'WAS', 'CHI'], 
    'NE': ['NO', 'MIA', 'TB', 'BUF', 'NYJ', 'ATL', 'BAL', 'PIT', 'CLE', 'HOU', 'DEN'], 
    'NO': ['SF', 'BUF', 'DAL', 'ARI', 'CHI', 'MIA', 'ATL', 'CAR', 'TB'], 
    'NYG': ['DET', 'GB', 'OAK', 'WAS', 'MIN', 'PHI'], 
    'NYJ': ['TB', 'MIA', 'ATL', 'OAK', 'BUF', 'NO', 'NE', 'CLE'], 
    'OAK': ['SD', 'PIT', 'HOU', 'JAC'], 
    'PHI': ['ARI', 'CHI', 'TB', 'OAK', 'WAS', 'DET', 'DAL', 'NYG', 'GB'], 
    'PIT': ['BUF', 'BAL', 'NYJ', 'CIN', 'GB', 'DET', 'CLE'], 
    'SD': ['DEN', 'KC', 'OAK', 'NYG', 'PHI', 'DAL', 'JAC', 'IND'],
    'SEA': ['CAR', 'NO', 'ATL', 'TB', 'ARI', 'NYG', 'JAC', 'SF', 'TEN', 'HOU', 'MIN', 'STL'], 
    'SF': ['GB', 'HOU', 'STL', 'SEA', 'TB', 'JAC', 'TEN', 'WAS', 'ARI', 'ATL'], 
    'STL': ['IND', 'JAC', 'NO', 'HOU', 'ARI', 'TB', 'CHI'], 
    'TB': ['ATL', 'DET', 'MIA', 'BUF'], 
    'TEN': ['STL', 'HOU', 'SD', 'OAK', 'JAC', 'PIT', 'NYJ'], 
    'WAS': ['OAK', 'SD', 'CHI']},
  '2014': {
    'ARI': ['PHI', 'SF', 'OAK', 'NYG', 'STL', 'SD', 'DET', 'DAL', 'WAS', 'KC'], 
    'ATL': ['NO', 'CAR', 'TB', 'ARI'], 
    'BAL': ['MIA', 'CLE', 'NO', 'PIT', 'ATL', 'TEN', 'CAR', 'JAC', 'TB'], 
    'BUF': ['CHI', 'MIN', 'DET', 'NE', 'GB', 'CLE', 'MIA', 'NYJ'], 
    'CAR': ['TB', 'DET', 'CLE', 'ATL', 'CHI', 'NO'], 
    'CHI': ['SF', 'NYJ', 'ATL', 'MIN', 'TB'], 
    'CIN': ['HOU', 'ATL', 'TEN', 'JAC', 'TB', 'BAL', 'NO', 'CLE', 'DEN'], 
    'CLE': ['ATL', 'TB', 'OAK', 'TEN', 'CIN', 'PIT', 'NO'], 
    'DAL': ['SEA', 'TEN', 'PHI', 'HOU', 'JAC', 'STL', 'WAS', 'CHI', 'NYG', 'NO', 'IND'], 
    'DEN': ['NYJ', 'SD', 'MIA', 'IND', 'BUF', 'ARI', 'KC', 'SF', 'OAK'], 
    'DET': ['NYG', 'MIN', 'MIA', 'TB', 'NYJ', 'GB', 'ATL', 'NO', 'CHI'], 
    'GB': ['MIN', 'NYJ', 'PHI', 'CAR', 'MIA', 'TB', 'DET', 'NE', 'CHI', 'ATL'], 
    'HOU': ['CLE', 'OAK', 'WAS', 'TEN', 'JAC', 'BUF', 'BAL'], 
    'IND': ['CLE', 'TEN', 'JAC', 'HOU', 'BAL', 'CIN', 'NYG', 'WAS'], 
    'JAC': ['CLE', 'NYG', 'TEN'], 
    'KC': ['MIA', 'STL', 'OAK', 'NE', 'NYJ', 'SD', 'BUF', 'SEA'], 
    'MIA': ['NYJ', 'BUF', 'JAC', 'CHI', 'MIN', 'OAK', 'SD', 'NE'], 
    'MIN': ['CHI', 'STL', 'NYJ', 'WAS', 'ATL', 'CAR', 'TB'], 
    'NE': ['DEN', 'MIN', 'IND', 'DET', 'MIA', 'NYJ', 'SD', 'CHI', 'BUF', 'OAK', 'CIN'], 
    'NO': ['MIN', 'GB', 'CAR', 'TB', 'PIT', 'CHI'], 
    'NYG': ['HOU', 'WAS', 'STL', 'TEN', 'ATL'], 
    'NYJ': ['PIT', 'MIA', 'TEN', 'OAK'], 
    'OAK': ['KC', 'SF', 'BUF'], 
    'PHI': ['STL', 'CAR', 'NYG', 'WAS', 'HOU', 'DAL', 'JAC', 'IND', 'TEN'], 
    'PIT': ['IND', 'JAC', 'KC', 'CIN', 'BAL', 'CAR', 'ATL', 'CLE', 'TEN', 'HOU'], 
    'SD': ['NYJ', 'STL', 'BAL', 'BUF', 'SEA', 'JAC', 'OAK', 'SF'],
    'SEA': ['WAS', 'STL', 'NYG', 'CAR', 'SF', 'PHI', 'DEN', 'GB', 'OAK', 'ARI'], 
    'SF': ['STL', 'KC', 'ARI', 'WAS', 'NO', 'DAL', 'NYG', 'PHI'], 
    'STL': ['SF', 'TB', 'WAS', 'OAK', 'DEN', 'SEA'], 
    'TB': ['PIT', 'WAS'], 
    'TEN': ['KC', 'JAC'], 
    'WAS': ['DAL', 'PHI', 'JAC', 'TEN']},
  '2015': {
    'ARI': ['NO', 'BAL', 'SEA', 'GB', 'MIN', 'CLE', 'DET', 'SF', 'CIN', 'STL', 'CHI', 'PHI'], 
    'ATL': ['CAR', 'JAC', 'PHI', 'DAL', 'TEN', 'NYG', 'WAS', 'HOU'], 
    'BAL': ['CLE', 'SD', 'STL', 'PIT'], 
    'BUF': ['MIA', 'HOU', 'TEN', 'NYJ', 'IND', 'DAL'], 
    'CAR': ['HOU', 'SEA', 'WAS', 'NYG', 'TEN', 'JAC', 'NO', 'ATL', 'TB', 'IND', 'PHI', 'GB', 'DAL'], 
    'CHI': ['TB', 'OAK', 'SD', 'KC', 'GB', 'STL'], 
    'CIN': ['KC', 'SEA', 'BUF', 'OAK', 'STL', 'SD', 'PIT', 'BAL', 'CLE', 'SF'], 
    'CLE': ['SF', 'TEN', 'BAL'], 
    'DAL': ['PHI', 'WAS', 'NYG', 'MIA'], 
    'DEN': ['OAK', 'DET', 'SD', 'CLE', 'MIN', 'BAL', 'CIN', 'GB', 'CHI', 'KC', 'NE'], 
    'DET': ['CHI', 'OAK', 'SF', 'NO', 'GB', 'PHI'], 
    'GB': ['SF', 'DET', 'CHI', 'STL', 'DAL', 'OAK', 'MIN', 'SEA', 'KC', 'SD'], 
    'HOU': ['CIN', 'NYJ', 'JAC', 'NO', 'TEN', 'IND', 'TB'], 
    'IND': ['DEN', 'ATL', 'MIA', 'TEN', 'TB', 'HOU', 'JAC'], 
    'JAC': ['IND', 'MIA', 'BAL', 'BUF', 'TEN'], 
    'KC': ['PIT', 'DET', 'OAK', 'HOU', 'BAL', 'BUF', 'CLE', 'DEN', 'SD'], 
    'MIA': ['BAL', 'NE', 'HOU', 'TEN', 'WAS', 'PHI'], 
    'MIN': ['STL', 'OAK', 'NYG', 'ATL', 'KC', 'GB', 'DET', 'CHI', 'SD'], 
    'NE': ['BUF', 'HOU', 'WAS', 'DAL', 'JAC', 'NYJ', 'TEN', 'PIT', 'IND', 'MIA', 'NYG'], 
    'NO': ['ATL', 'IND', 'NYG', 'TB', 'JAC', 'DAL'], 
    'NYG': ['BUF', 'MIA', 'DAL', 'SF', 'WAS', 'TB'], 
    'NYJ': ['NYG', 'TEN', 'DAL', 'CLE', 'NE', 'WAS', 'JAC', 'IND', 'MIA'], 
    'OAK': ['NYJ', 'CLE', 'BAL', 'SD', 'DEN', 'TEN'], 
    'PHI': ['NYJ', 'NE', 'NO', 'BUF', 'NYG', 'DAL'], 
    'PIT': ['SD', 'CIN', 'DEN', 'ARI', 'IND', 'CLE', 'STL', 'SF', 'OAK'], 
    'SD': ['DET', 'MIA', 'JAC', 'CLE'],
    'SEA': ['ARI', 'SF', 'BAL', 'CHI', 'PIT', 'DAL', 'MIN', 'DET', 'CLE'], 
    'SF': ['MIN', 'BAL', 'CHI', 'STL', 'ATL'], 
    'STL': ['ARI', 'TB', 'DET', 'SF', 'SEA', 'CLE'], 
    'TB': ['JAC', 'PHI', 'DAL', 'ATL', 'NO'], 
    'TEN': ['TB', 'NO', 'JAC'], 
    'WAS': ['PHI', 'CHI', 'BUF', 'STL', 'TB', 'NYG', 'DAL', 'NO']},
  '2016': {
    'ARI': ['NYJ', 'LA', 'WAS', 'SF', 'TB', 'SEA'], 
    'ATL': ['GB', 'DEN', 'LA', 'ARI', 'SF', 'TB', 'NO', 'CAR', 'OAK'], 
    'BAL': ['PHI', 'BUF', 'PIT', 'CLE', 'JAC', 'CIN', 'MIA'], 
    'BUF': ['CIN', 'CLE', 'SF', 'JAC', 'NE', 'ARI', 'LA'], 
    'CAR': ['WAS', 'LA', 'NO', 'SD', 'SF', 'ARI'], 
    'CHI': ['DET', 'MIN', 'SF'], 
    'CIN': ['MIA', 'BAL', 'NYJ', 'PHI', 'CLE'], 
    'CLE': ['SD'], 
    'DAL': ['TB', 'CHI', 'DET', 'SF', 'PIT', 'BAL', 'GB', 'WAS', 'MIN', 'CLE', 'PHI', 'CIN'], 
    'DEN': ['SD', 'NO', 'HOU', 'CAR', 'TB', 'IND', 'JAC', 'CIN', 'OAK'], 
    'DET': ['NO', 'LA', 'MIN', 'CHI', 'IND', 'PHI', 'WAS', 'JAC'], 
    'GB': ['MIN', 'HOU', 'CHI', 'DET', 'SEA', 'JAC', 'PHI', 'NYG'], 
    'HOU': ['DET', 'KC', 'CHI', 'CIN', 'TEN', 'JAC', 'IND'], 
    'IND': ['MIN', 'CHI', 'GB', 'SD', 'TEN', 'NYJ', 'JAC'], 
    'JAC': ['IND', 'CHI', 'TEN'], 
    'KC': ['CAR', 'SD', 'OAK', 'NYJ', 'DEN', 'IND', 'JAC', 'NO', 'ATL'], 
    'LA': ['ARI', 'TB', 'SEA', 'NYJ'], 
    'MIA': ['PIT', 'SD', 'CLE', 'ARI', 'BUF', 'NYJ', 'LA', 'SF'], 
    'MIN': ['CHI', 'GB', 'JAC', 'ARI', 'CAR', 'HOU', 'TEN', 'NYG'], 
    'NE': ['ARI', 'PIT', 'SF', 'BAL', 'MIA', 'BUF', 'CIN', 'DEN', 'CLE', 'HOU', 'LA', 'NYJ'], 
    'NO': ['SF', 'TB', 'CAR', 'LA', 'SD', 'SEA', 'ARI'], 
    'NYG': ['BAL', 'NO', 'WAS', 'DET', 'CLE', 'LA', 'CIN', 'DAL', 'PHI', 'CHI'], 
    'NYJ': ['BUF', 'CLE', 'SF', 'BAL'], 
    'OAK': ['TEN', 'BUF', 'SD', 'CAR', 'BAL', 'IND', 'NO', 'DEN', 'JAC', 'TB', 'HOU'], 
    'PHI': ['DAL', 'MIN', 'PIT', 'CLE', 'CHI', 'NYG', 'ATL'], 
    'PIT': ['KC', 'WAS', 'NYG', 'CLE', 'IND', 'NYJ', 'BAL', 'BUF', 'CIN'], 
    'SD': ['JAC', 'ATL', 'HOU', 'DEN', 'TEN'],
    'SEA': ['NE', 'CAR', 'PHI', 'MIA', 'SF', 'ATL', 'NYJ', 'BUF', 'LA'], 
    'SF': ['LA'], 
    'TB': ['ATL', 'CAR', 'SD', 'KC', 'SF', 'CHI', 'NO', 'SEA'], 
    'TEN': ['HOU', 'GB', 'KC', 'DET', 'CLE', 'MIA', 'CHI', 'JAC', 'DEN'], 
    'WAS': ['NYG', 'CHI', 'CLE', 'GB', 'BAL', 'PHI', 'MIN']},
  '2017': {
    'ARI': ['SF', 'TEN', 'SEA', 'TB', 'JAC', 'NYG', 'IND'], 
    'ATL': ['DAL', 'GB', 'CAR', 'SEA', 'NYJ', 'NO', 'DET', 'CHI', 'TB'], 
    'BAL': ['CLE', 'MIA', 'OAK', 'GB', 'CIN', 'IND', 'HOU', 'DET'], 
    'BUF': ['TB', 'MIA', 'DEN', 'NYJ', 'IND', 'KC', 'OAK', 'ATL'], 
    'CAR': ['MIN', 'DET', 'TB', 'GB', 'MIA', 'BUF', 'ATL', 'SF', 'NYJ', 'NE'], 
    'CHI': ['PIT', 'CIN', 'CLE', 'CAR', 'BAL'], 
    'CIN': ['CLE', 'BAL', 'DEN', 'DET', 'BUF', 'IND'], 
    'CLE': [], 
    'DAL': ['ARI', 'PHI', 'NYG', 'WAS', 'SF', 'OAK', 'KC'], 
    'DEN': ['NYJ', 'LAC', 'DAL', 'OAK', 'IND'], 
    'DET': ['GB', 'CLE', 'TB', 'NYG', 'ARI', 'MIN', 'CHI'], 
    'GB': ['TB', 'CLE', 'CHI', 'SEA', 'CIN', 'DAL'], 
    'HOU': ['CLE', 'ARI', 'CIN', 'TEN'], 
    'IND': ['SF', 'HOU', 'CLE'], 
    'JAC': ['CLE', 'CIN', 'IND', 'SEA', 'LAC', 'PIT', 'HOU', 'BAL'], 
    'KC': ['PHI', 'NE', 'LAC', 'OAK', 'HOU', 'MIA', 'WAS', 'DEN'], 
    'LA': ['NO', 'DAL', 'TEN', 'IND', 'SF', 'SEA', 'JAC', 'HOU', 'NYG', 'ARI'], 
    'LAC': ['DEN', 'NYG', 'CLE', 'NYJ', 'DAL', 'BUF', 'WAS', 'OAK'], 
    'MIA': ['NYJ', 'TEN', 'NE', 'ATL', 'LAC', 'DEN'], 
    'MIN': ['DET', 'ATL', 'GB', 'CIN', 'BAL', 'WAS', 'CHI', 'CLE', 'LA', 'TB', 'NO'],
    'NE': ['PIT', 'TB', 'BUF', 'DEN', 'LAC', 'MIA', 'OAK', 'NO', 'ATL', 'HOU', 'NYJ'], 
    'NO': ['MIA', 'WAS', 'CAR', 'TB', 'ATL', 'NYJ', 'DET', 'CHI', 'BUF', 'GB'], 
    'NYG': ['WAS', 'KC', 'DEN'], 
    'NYJ': ['MIA', 'KC', 'BUF', 'JAC', 'CLE'], 
    'OAK': ['NYJ', 'KC', 'NYG', 'MIA', 'DEN', 'TEN'], 
    'PHI': ['LA', 'DAL', 'LAC', 'ARI', 'CHI', 'WAS', 'NYG', 'SF', 'OAK', 'CAR', 'DEN'], 
    'PIT': ['DET', 'CIN', 'GB', 'BAL', 'CLE', 'MIN', 'KC', 'IND', 'TEN', 'HOU'], 
    'SEA': ['IND', 'ARI', 'HOU', 'DAL', 'NYG', 'LA', 'SF', 'PHI'], 
    'SF': ['LA', 'NYG', 'HOU', 'CHI', 'JAC', 'TEN'],
    'TB': ['CHI', 'NYJ', 'NO', 'NYG', 'MIA'], 
    'TEN': ['CIN', 'SEA', 'HOU', 'IND', 'BAL', 'JAC', 'CLE'], 
    'WAS': ['OAK', 'ARI', 'LA', 'SF', 'NYG', 'DEN', 'SEA']},
  '2018': {
    'ARI': ['SF', 'GB'], 
    'ATL': ['TB', 'WAS', 'NYG', 'ARI', 'CAR'], 
    'BAL': ['TB', 'ATL', 'TEN', 'PIT', 'LAC', 'CIN', 'CLE', 'DEN', 'OAK', 'BUF'], 
    'BUF': ['MIA', 'JAC', 'NYJ', 'DET', 'MIN', 'TEN'], 
    'CAR': ['NYG', 'CIN', 'DAL', 'TB', 'NO', 'PHI', 'BAL'], 
    'CHI': ['BUF', 'MIN', 'SEA', 'SF', 'ARI', 'GB', 'TB', 'NYJ', 'DET', 'LA'], 
    'CIN': ['MIA', 'OAK', 'ATL', 'IND', 'BAL', 'TB'], 
    'CLE': ['NYJ', 'ATL', 'DEN', 'BAL', 'CAR', 'CIN'], 
    'DAL': ['NYG', 'WAS', 'PHI', 'NO', 'TB', 'JAC', 'DET', 'ATL'], 
    'DEN': ['ARI', 'SEA', 'LAC', 'CIN', 'PIT', 'OAK'], 
    'DET': ['GB', 'ARI', 'MIA', 'NE', 'CAR'], 
    'GB': ['CHI', 'BUF', 'NYJ', 'MIA', 'ATL', 'SF'], 
    'HOU': ['DAL', 'BUF', 'WAS', 'NYJ', 'DEN', 'MIA', 'TEN', 'IND', 'CLE', 'JAC'], 
    'IND': ['OAK', 'WAS', 'BUF', 'TEN', 'HOU', 'NYG', 'JAC', 'DAL', 'MIA'], 
    'JAC': ['NYJ', 'IND', 'MIA', 'NE', 'NYG'], 
    'KC': ['JAC', 'BAL', 'LAC', 'OAK', 'PIT', 'SF', 'DEN', 'ARI', 'CIN', 'CLE'], 
    'LA': ['LAC', 'SEA', 'DET', 'GB', 'DEN', 'ARI', 'OAK', 'KC', 'MIN', 'SF'], 
    'LAC': ['SF', 'SEA', 'CLE', 'TEN', 'OAK', 'PIT', 'ARI', 'KC', 'CIN', 'DEN', 'BUF'], 
    'MIA': ['OAK', 'NE', 'NYJ', 'CHI', 'TEN', 'BUF'], 
    'MIN': ['SF', 'NYJ', 'ARI', 'PHI', 'DET', 'MIA', 'GB'], 
    'NE': ['GB', 'CHI', 'MIN', 'BUF', 'KC', 'HOU', 'IND', 'MIA', 'NYJ'], 
    'NO': ['NYG', 'CAR', 'TB', 'BAL', 'PHI', 'WAS', 'LA', 'MIN', 'CIN', 'PIT', 'ATL', 'CLE'], 
    'NYG': ['CHI', 'HOU', 'SF', 'WAS', 'TB'], 
    'NYJ': ['DEN', 'IND', 'DET', 'BUF'], 
    'OAK': ['PIT', 'CLE', 'DEN', 'ARI'], 
    'PHI': ['NYG', 'HOU', 'WAS', 'JAC', 'ATL', 'IND', 'LA'], 
    'PIT': ['BAL', 'CLE', 'ATL', 'JAC', 'TB', 'NE', 'CIN', 'CAR'], 
    'SEA': ['OAK', 'SF', 'ARI', 'GB', 'DAL', 'MIN', 'KC', 'DET', 'CAR'], 
    'SF': ['OAK', 'DEN', 'SEA', 'DET'],
    'TB': ['NO', 'PHI', 'SF', 'CAR', 'CLE'], 
    'TEN': ['NE', 'JAC', 'HOU', 'PHI', 'WAS', 'NYG', 'NYJ', 'DAL'], 
    'WAS': ['TB', 'CAR', 'NYG', 'ARI', 'GB', 'JAC', 'DAL']},    
  '2019': {
    'ARI': ['CIN', 'ATL', 'NYG'], 
    'ATL': ['NO', 'CAR', 'PHI'], 
    'BAL': ['PIT', 'NE', 'CIN', 'HOU', 'LA', 'SF', 'MIA', 'ARI', 'CIN', 'SEA'], 
    'BUF': ['TEN', 'MIA', 'MIA', 'DEN', 'DAL', 'WAS', 'NYJ', 'NYG', 'CIN'], 
    'CAR': ['TEN', 'HOU', 'JAC', 'ARI', 'TB'], 
    'CHI': ['DET', 'NYG', 'DET', 'DEN', 'MIN', 'WAS', 'DAL'], 
    'CIN': ['NYJ'], 
    'CLE': ['BUF', 'PIT', 'MIA', 'NYJ', 'BAL'], 
    'DAL': ['DET', 'NYG', 'NYG', 'WAS', 'MIA', 'PHI'], 
    'DEN': ['LAC', 'CLE', 'LAC', 'TEN'], 
    'DET': ['LAC', 'PHI', 'NYG'], 
    'GB': ['DAL', 'OAK', 'DET', 'CAR', 'NYG', 'KC', 'MIN', 'CHI', 'DEN'], 
    'HOU': ['ATL', 'IND', 'NE', 'OAK', 'JAC', 'JAC', 'LAC', 'KC'], 
    'IND': ['KC', 'JAC', 'DEN', 'TEN', 'ATL', 'HOU'], 
    'JAC': ['CIN', 'NYJ', 'TEN', 'DEN'], 
    'KC': ['DEN', 'LAC', 'OAK', 'MIN', 'JAC', 'OAK', 'DET', 'BAL'], 
    'LA': ['ATL', 'CHI', 'ARI', 'CIN', 'CAR', 'NO', 'CLE'], 
    'LAC': ['GB', 'IND', 'MIA', 'CHI'], 
    'MIA': ['IND', 'PHI', 'NYJ'], 
    'MIN': ['DET', 'NYG', 'DAL', 'DEN', 'ATL', 'OAK', 'PHI', 'WAS'], 
    'NE': ['WAS', 'PHI', 'DAL', 'CLE', 'MIA', 'BUF', 'PIT', 'NYJ', 'NYG', 'NYJ'], 
    'NO': ['TB', 'TB', 'CAR', 'ATL', 'ARI', 'DAL', 'HOU', 'SEA', 'JAC', 'CHI'], 
    'NYG': ['WAS', 'TB'], 
    'NYJ': ['NYG', 'WAS', 'OAK', 'DAL'], 
    'OAK': ['CHI', 'CIN', 'DET', 'LAC', 'IND', 'DEN'], 
    'PHI': ['NYJ', 'CHI', 'WAS', 'GB', 'BUF'], 
    'PIT': ['LAC', 'LA', 'CIN', 'CLE', 'MIA', 'IND', 'CIN'], 
    'SEA': ['TB', 'SF', 'PHI', 'CIN', 'PIT', 'ARI', 'LA', 'CLE', 'ATL', 'MIN'], 
    'SF': ['CLE', 'ARI', 'GB', 'CAR', 'ARI', 'CIN', 'TB', 'PIT', 'LA', 'WAS'],
    'TB': ['ARI', 'ATL', 'JAC', 'LA', 'CAR'], 
    'TEN': ['KC', 'JAC', 'IND', 'TB', 'CLE', 'ATL', 'LAC'], 
    'WAS': ['DET', 'CAR', 'MIA']}
};