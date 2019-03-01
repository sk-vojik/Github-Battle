const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');


function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map((repo, index) => (
        <li className="popular-item" key={repo.name}>
          <div className="popular-rank">#{index + 1}</div>
          <ul className="space-list-items">
            <img className="avatar" src={repo.owner.avatar_url} alt="" />
          </ul>
          <li><a href={repo.html_url}>{repo.name}</a></li>
          <li>@{repo.owner.login}</li>
          <li>{repo.stargazers_count} stars</li>
        </li>
      ))}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}


function SelectLanguage (props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {languages.map(lang => (
        <li style={lang === props.selectedLanguage ? { color: 'red' } : null } onClick={props.onSelect.bind(null, lang)} key={lang}>{lang}</li>
      ))}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}


class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: '',
      repos: [],
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage(lang) {
    this.setState({ selectedLanguage: lang, repos: null })

    api.fetchPopularRepos(this.state.selectedLanguage)
      .then(repos => this.setState({ repos: repos }));
  }



  render() {
    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
        {!this.state.repos ? <p>Loading</p> :
        <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

export default Popular;