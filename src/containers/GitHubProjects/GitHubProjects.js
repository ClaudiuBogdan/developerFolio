import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./GitHubProject.css";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import { StyleConsumer } from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function GitHubProjects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const { isDark } = useContext(StyleConsumer);
  useEffect(() => {
    function getRepoData() {
      const client = new ApolloClient({
        uri: "https://api.github.com/graphql",
        request: (operation) => {
          operation.setContext({
            headers: {
              authorization: `Bearer ${openSource.githubConvertedToken}`,
            },
          });
        },
      });
  
      client
        .query({
          query: gql`
          {
          user(login: "${openSource.githubUserName}") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    forkCount
                    stargazers {
                      totalCount
                    }
                    url
                    id
                    diskUsage
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
          `,
        })
        .then((result) => {
          setrepoFunction(result.data.user.pinnedItems.edges);
          console.log(result);
        })
        .catch(function (error) {
          console.log(error);
          setrepoFunction("Error");
          console.log(
            "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
          );
        });
    }
  
    getRepoData();
  }, []);

  
  function setrepoFunction(array) {
    setrepo(array);
  }
  if (!(typeof repo === "string" || repo instanceof String)) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="github-project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
