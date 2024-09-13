# Themis

[![teste em themis.kauefraga.dev](https://img.shields.io/badge/teste_em-themis.kauefraga.dev-208bfe)](https://themis.kauefraga.dev)
[![Licença do projeto](https://img.shields.io/github/license/kauefraga/themis)](https://github.com/kauefraga/themis/blob/main/LICENSE)
[![Último commit](https://img.shields.io/github/last-commit/kauefraga/themis/main)](https://github.com/kauefraga/themis)

> Um analisador de perfis do Bluesky, focado em usabilidade. Quer melhorar o seu perfil do Bluesky? O Themis vai te ajudar!

O usuário insere o @ de um perfil e é redirecionado para a página de análise do mesmo, onde os dados do perfil inserido são processados e uma avaliação é gerada.

O objetivo do Themis é ser divertido e mostrar que existem alguns pontos que tornam um perfil mais atrativo no Bluesky.

Esse projeto é inspirado no [auralized.com](https://www.auralized.com/), um analisador de "aura" para perfis do Twitter/X. A ideia original era que fosse uma versão brasileira do projeto *auralized* para o Bluesky.

## Mais detalhes do projeto

O usuário insere o @ de um perfil (`handle`) e é redirecionado para a página de análise do mesmo, onde os dados do perfil inserido são processados e uma avaliação é gerada.

A **página inicial** é onde o usuário insere o `handle` do perfil por meio do formulário e é redirecionado para a página de análise.

Na **página de análise** (server component, server-side rendered), os dados do perfil são consultados utilizando a [API do Bluesky](https://docs.bsky.app/) (especificamente, o lexicon [`app.bsky.actor.getProfile`](https://docs.bsky.app/docs/api/app-bsky-actor-get-profile)) pelo [SDK](https://www.npmjs.com/package/@atproto/api) e consumidos na geração da avaliação do perfil, o feedback é gerado nessa etapa também.
